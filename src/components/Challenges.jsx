import React from 'react'
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
export default function Challenges() {
  return (
    <div>
      <Navbar />
      <InnerNav />
      <div className="cardCont">
      <ChallengeCard img={mobile} heading={"Quit Mobile"} cont={"Or create your own, do it for 21 days, and track your habits  Or create your own, do it for 21 days, and track your habits"} />
      <ChallengeCard img={smoke} heading={"Quit Smoking"} cont={"OOr create your own, do it for 21 days, and track your habits  Or create your own, do it for 21 days, and track your habits"} />
      <ChallengeCard img={money} heading={"Money Management"} cont={"Or create your own, do it for 21 days, and track your habits  Or create your own, do it for 21 days, and track your habits"} />
      <ChallengeCard img={reading} heading={"Start Reading Daily"} cont={"Or create your own, do it for 21 days, and track your habits  Or create your own, do it for 21 days, and track your habits"} />
  
      <ChallengeCard img={meditate} heading={"Meditate Daily"} cont={"OOr create your own, do it for 21 days, and track your habits  Or create your own, do it for 21 days, and track your habitss"} />
      <ChallengeCard img={bed} heading={"Wake Up early" } cont={"OOr create your own, do it for 21 days, and track your habits  Or create your own, do it for 21 days, and track your habitss"} />
    </div>
    <Footer></Footer>
    </div>


  )
}

