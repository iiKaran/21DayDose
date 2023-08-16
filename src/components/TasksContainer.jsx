import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import Axios from '../utils/Axios';
import NotFound from './NotFound';
import DayCard from './DayCard';
import Navbar from './Navbar';
import Footer from './Footer';
export default function TasksContainer(props) {
    const [habbit , sethabbit] = useState(null);
    const locate = useLocation();
    const {id} = useContext(AppContext);
    useEffect( ()=>{
        console.log("mycurrlocation is" ,locate.pathname)
        const path = locate.pathname; 
        const spilitedPath= path.split("/");
        console.log(spilitedPath);
        const id = spilitedPath[spilitedPath.length-1]
        console.log(id);
        const res =  Axios.post("/get-this-habbit",{
            habbitId:id
        }).then((response)=>{
            sethabbit(response.data.foundHabbit);
            console.log(response.data.foundHabbit);

        })
    },[locate.pathname])
  return (
    <div>
        <Navbar></Navbar>
     {id && !habbit && <NotFound/>} 
     {!id && habbit && <NotFound/>} 
     {
     id && habbit &&<div className='task-cont'>
        <h2>{habbit.title}</h2>
        <p className='task-desc'>{habbit.description}</p>
        <div className='day-container'>
        {
            habbit.tasks.map((day, index)=>{
                 
                return <DayCard  title = {day.title} description ={day.description} points={day.reward}  index ={index}/>
            })
        }
        </div>
    </div>
     }
  <Footer></Footer>
    </div>
  )
}

