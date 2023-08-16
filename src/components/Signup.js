import React, { useContext } from 'react'
// import img from './images/people-connected-social-media.jpg'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Footer from './Footer';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import { useState } from 'react';

let img = "https://img.freepik.com/free-vector/tiny-depressed-woman-with-anxiety-sitting-large-pill-surrounded-by-drugs_74855-20403.jpg?t=st=1680255245~exp=1680255845~hmac=973106eef5749ecd22a4d4ac964f615ebc6ef1023f098516393093ad6fe8fed1";
export default function Login() {

  const { setLogin, emailState, setEmailState, setPoints} = useContext(AppContext);
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  function changeHandler(event) {
    const { name, value } = event.target;
    setInputFields((inputFields) => ({ ...inputFields, [name]: value }));
    if(name == "email")
    {
      setEmailState(value);
    }

  }
   function clearField() {
    setInputFields({
      email: "",
      password: "",
      confirmPassword: ""
    });
  }
  async function signUpHandler() {
    console.log(inputFields);
    const { data } = await Axios.post("/signup", {
      ...inputFields
    }).then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        toast.success("User created Successully");
        console.log(response);
        clearField();
        navigate("/login");
      }
      if(emailState!= null){
        console.log("inside")
       const res = Axios.post("/get-points",{
        email:emailState
       }).then((response)=>{
        console.log(response.data.points)
        setPoints(response.data.points)
       })
      }

    }).catch((error) => {
      console.log("inside the catch");
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          console.log('Bad Request:', error.response.data);
          clearField();
          toast.error("User Already Exist")
          
        }
        else if (status === 404) {
          console.log("Both passwords does not match");
          toast.error("Cant verify password")
          clearField();
        }
      }


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
            <span className='signin'> Sign Up</span>
            <input type="email" placeholder='Enter Your email: ' name='email' onChange={changeHandler} value={inputFields.email}/>
            <input type="password" placeholder='Enter Your Password :  ' name='password' onChange={changeHandler} value={inputFields.password} />
            <input type="password" placeholder='Confirm Your Password :  ' name='confirmPassword' onChange={changeHandler} value={inputFields.confirmPassword} />
            <div className="btn loginbtn" id='formbtn' onClick={signUpHandler}>Sign Up </div>
            <div className="google">Sign Up with Google </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
