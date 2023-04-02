import React, { useContext } from 'react'
import {FaSun,FaCoins} from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import {useNavigate} from 'react-router-dom'
export default function Navbar() {
  const {login,points,setLogin} = useContext(AppContext);
  const navigate = useNavigate();
  function signInHandler(){
     navigate("/login");
  }
  function logOutHandler(){
    setLogin(false)
    navigate("/")
  }
  function newAccountHandler()
  {
    navigate("/signup");
  }
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
        login && <div className="btn link " onClick={logOutHandler}>Log Out</div>
       }
      </div>
    </div>
  )
}
