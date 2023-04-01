import React from 'react'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
export default function TestCard() {
  return (
    <div>
      <div className="testcard">
       <img src="https://t.ly/0fxV" alt="person.jpg" />
       <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quisquam ratione illo tenetur ea maiores laborum cumque sunt explicabo, incidunt ad 
       </p>
       <div className="name">Vipasha vasu</div>
       <div className="stars">
        <FaStar color='#5ae4a8' />
        <FaStar color='#5ae4a8' />
        <FaStar color='#5ae4a8' />
        <FaStar color='#5ae4a8'/>
        <FaStarHalfAlt color='#5ae4a8' />
       </div>
      </div>
    </div>
  )
}
