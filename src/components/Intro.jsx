import React from 'react'
import img from './images/intro.jpg';
export default function Intro() {
  return (
    <div className='intro'>
     <div className="intro-item">
         <img src={img} alt="loading" />
     </div>
     <div className="intro-item left-intro">
         <h1>Form or leave A habbit...</h1>
         <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, minus! Error eveniet iusto dignissimos dicta a velit accusantium neque saepe soluta, numquam repellendus at, deleniti, quod mollitia nihil voluptates voluptatum!
         </p>
         <div className="btn" id='introbtn'>Start Now !</div>
     </div>
    </div>
  )
}
