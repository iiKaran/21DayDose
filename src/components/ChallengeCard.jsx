import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChallengeCard(props) {
  const navigate = useNavigate();
  return (
    <div className='challengeCard'>
       <img src={props.img} alt="" />
       <h4>{props.heading}</h4>
        <p className="challenge-desc">
         {props.cont}
        </p>
        <button className='btn'  id='challengeBtn' onClick={()=>{
          // navigate("/")
          navigate("/quitsmoke");
        }}>Start Now</button>
    </div>
  )
}
