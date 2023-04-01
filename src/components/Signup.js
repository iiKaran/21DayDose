import React, { useContext } from 'react'
// import img from './images/people-connected-social-media.jpg'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Footer from './Footer';
let img = "https://img.freepik.com/free-vector/tiny-depressed-woman-with-anxiety-sitting-large-pill-surrounded-by-drugs_74855-20403.jpg?t=st=1680255245~exp=1680255845~hmac=973106eef5749ecd22a4d4ac964f615ebc6ef1023f098516393093ad6fe8fed1";
export default function Login() {
 
  const {setLogin} = useContext(AppContext);
  const navigate = useNavigate(); 
  function signUpHandler()
  {
    setLogin(true);
    navigate("/Challenges");

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
          <input type="text" placeholder='Enter Your Name  : ' name='name' />
          <input type="password" placeholder='Enter Your Password :  ' name='email' />
        <div className="btn loginbtn" id='formbtn' onClick={signUpHandler}>Sign Up </div>
        <div className="google">Sign Up with Google </div>
        </form>
    </div>
     </div>
     <Footer/>
      </>
  )
}
