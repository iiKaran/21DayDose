import React, { useContext, useEffect } from 'react'
import {FaSun,FaCoins} from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import {HiOutlineLogout} from 'react-icons/hi'
import Axios from '../utils/Axios'
import {useNavigate} from 'react-router-dom'
export default function Navbar() {
  const {login,points,setLogin,setPoints, emailState, setEmailState, id, setId} = useContext(AppContext);
  
  const navigate = useNavigate();
  function signInHandler(){
     navigate("/login");
  }
  function logOutHandler(){
    setLogin(false)
    navigate("/")
  }
  async function setPointsFxn()
  {
    if(emailState!= null){
      const res = await Axios.post("/get-points",{
       email:emailState
      }).then((response)=>{
        console.log(" the get in the dsxn ", response)
       console.log(response.data.points)
       setPoints(response.data.points)
      })
     }
  }
  function newAccountHandler()
  {
    navigate("/signup");
  }
  async function checkCall(){
    console.log("i am here");
    const gettoken = localStorage.getItem("token");
    const res = await Axios.post("/loggedIn",{
     token:gettoken,
    }).then((response)=>{
      setId(response.data.user.id);
      setEmailState(response.data.user.email);
    })
 }
 useEffect(()=>{
  setPointsFxn();
 },[emailState])
   useEffect(()=>{
      checkCall(); 
   },[])
  return (
    <div className={login? "navbar bg-dark":"navbar" }>
      <div className={login?"nav-item logo link white":"nav-item logo link"}> <span>21</span>-Days-Challenge</div>
      <div className="nav-item nav-menu">
      <div className={login?"link white" :"link"}>
       <FaSun/>
      </div>
      {
        !login &&   <div className="link">About</div>
       }   
       {
       !login && <div className="link">How it works</div>
       }
       {
        !login && <div className="btn link" onClick={signInHandler}>Sign In</div>
       }
       {
        !login &&<div className="btn link " onClick={newAccountHandler}>Create New Account</div>
       }
        {
        login && <div className=" link "><FaCoins color='FFD700'/> <span className={login?"pointcnt white":"pointcnt"}>{points}</span></div>
        }
       {
        login && <div className="btn link ">Redeem Points</div>
       }
       {
        login && <div className="btn link " onClick={logOutHandler}><HiOutlineLogout size={"2rem"} /></div>
       }
      </div>
    </div>
  )
}
