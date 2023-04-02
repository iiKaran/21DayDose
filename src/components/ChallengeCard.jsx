import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

export default function ChallengeCard(props) {
  const navigate = useNavigate();
  let {setLogin} = useContext(AppContext); 

  return (
    <div className='challengeCard'>
       <img src={props.img} alt="" />
       <h4>{props.heading}</h4>
        <p className="challenge-desc">
         {props.cont.substring(0,200)}
        </p>
        <button className='btn'  id='challengeBtn' onClick={()=>{
          // navigate("/")
          navigate(`${props.link}`);
          setLogin(true);
          
        }}>Start Now</button>
    </div>
  )
}
