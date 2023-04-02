import React, { useContext } from 'react'
import Navbar from './Navbar'
import {FaCoins} from 'react-icons/fa';
// import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import{ Tasks} from './Task'
export default function Day(props) {
  const {day,setDay, points,setPoints} = useContext(AppContext);
  const locate = useLocation(); 
  const path = locate.pathname; 
  const dayData = Tasks[`${path}`][day-1]; 
// {console.log(Tasks["quitsmoke"][0])}
function completeHandler(){
  
    if(day+1 > 21)
    {
      setDay(1); 
    }
    else
    setDay(day+1); 
  
    setPoints(points + dayData.points)
  
  }
  return (
    <>
      <Navbar />
    <div className="day-page">
    <div className='day'>
      <div className="day-head">
        <h2>{props.title}</h2>
         <div className="day-status">
          <span>
              {day} / 21
          </span>
          <span>
             <FaCoins color='FFD700' /> {dayData.points} coins
          </span>
         </div>
        </div>
         <div className="task">
          <div className="main-task">{dayData.maintask}</div>
          <p className="advantage">
          {dayData.content}
          </p>
          <div className="complete btn" onClick={completeHandler}>Mark As Complete</div>
          <div className="complete btn" onClick={completeHandler}>Skip By Watching Add</div>
          </div>
         </div> 
          
    </div>
    </>
  )
}
