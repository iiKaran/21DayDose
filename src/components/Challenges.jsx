import React, { useContext } from 'react'
import Navbar from './Navbar'
import InnerNav from './InnerNav'
import Footer from './Footer'
import ChallengeCard from './ChallengeCard'
import mobile from './images/mobile.jpg';
import bed from './images/bed.jpg';
import meditate from './images/meditate.jpg';
import money from './images/money.jpg';
import smoke  from './images/smoke.jpg';
import reading from './images/reading.jpg';
import { AppContext } from '../context/AppContext'
export default function Challenges() {
  const {Data} = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <InnerNav />
      <div className="cardCont">
      {
        Data.map((card)=>{
          return <ChallengeCard img = {card.url} heading = {card.title} link = {card.link}/>
        })
      }
       </div>
    <Footer></Footer>
    </div>
  )
}

