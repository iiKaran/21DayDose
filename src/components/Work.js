import React from 'react'
export default function Work(props) {
  return (
    <div className='work'>
     <img src={props.img} alt="loading" />
      <h4>{props.heading}</h4>    
      <div className="work-content">{props.cont}</div>  
    </div>
  )
}
