import React from 'react'
import {FaCoins} from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Axios from '../utils/Axios';
export default function DayCard(props) {
  const { emailState,setPoints} = useContext(AppContext);
  return (
    <div className='day-card'>
    <h4 className='day-title'>{props.title} <span className='coin-cont'><FaCoins color='FFD700'className='coin-fa' /><span>{props.points}</span></span></h4>
    <p className='day-desc '>{props.description.substring(0,200)}</p>
    <div className='day-btn' onClick={async()=>{
      let reward = props.points ; 
      const res = await Axios.post("/increase-points",{
        email:emailState, 
        reward
      }).then((response)=>{
         setPoints(response.data.increasedPoints.points)
      })
      
    }}>Complete Now</div>
    </div>
  )
}
