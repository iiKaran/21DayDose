import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Axios from '../utils/Axios';
import TasksContainer from './TasksContainer';
export default function ChallengeCard(props) {
  const navigate = useNavigate();
  let {setLogin, sethabbit, habbit} = useContext(AppContext); 
  return (
    <div className='challengeCard'>
       <img src={props.img} alt="loading" />
       <h4>{props.heading}</h4>
        <p className="challenge-desc">
         {props.content.substring(0,200)}
        </p>
        <button className='btn'  id={props.id} onClick={async ()=>{
          navigate(`${props.link}/${props.id}`);
          setLogin(true);
          
        }}>Start Now</button>
    </div>
  )
}
