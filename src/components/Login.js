import React, { useState } from 'react'
// import img from './images/people-connected-social-media.jpg'; 
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
// const Axios = require("..utils/Axios"); 
import Axios from '../utils/Axios';
import { AppContext } from '../context/AppContext';
import Footer from './Footer';
let img = "https://img.freepik.com/free-vector/tiny-depressed-woman-with-anxiety-sitting-large-pill-surrounded-by-drugs_74855-20403.jpg?t=st=1680255245~exp=1680255845~hmac=973106eef5749ecd22a4d4ac964f615ebc6ef1023f098516393093ad6fe8fed1";
export default function Login() {
  const {setLogin} = useContext(AppContext);
  const navigate = useNavigate(); 

  const [inputFields, setInputFields] = useState({
    email:"", 
    password:"", 
  })

  function changeHandler(event){
    const { name, value } = event.target;
    setInputFields((inputFields) => ({ ...inputFields, [name]: value }));
    
  }
  async function logInHandler()
  {

    console.log(inputFields);
    const {data}= await Axios.post("/login",{
      ...inputFields
    }).then((response)=>{
      const status = response.status; 
    
      console.log(status);

    }).catch((err)=>{
      
      console.log("errr"+err.status);
    })
   
  
  }
  return (
    <> 
    <div className='loginpage'>
       <div className="loginpage-card">
        <img src={img} alt="loading" />
     </div>
     <div className="loginpage-card">
     <form className='feed-form' >
          <span className='signin' > Sign In</span> 
          <input type="email" name='email' value={inputFields.email} onChange={changeHandler} placeholder='Enter Your Name  : '  />
          <input type="password" name='password' value={inputFields.password} onChange={changeHandler}  placeholder='Enter Your Password : '/>
        <div className="btn loginbtn" id='formbtn' onClick={logInHandler}>Log in </div>
        <div className="google">Sign in with Google </div>
        </form>
     </div>
    </div>
    <Footer/>
    </>
  )
}
