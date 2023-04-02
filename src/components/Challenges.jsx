import React, { useContext } from 'react'
import Navbar from './Navbar'
import InnerNav from './InnerNav'
import Footer from './Footer'
import ChallengeCard from './ChallengeCard'
import { AppContext } from '../context/AppContext'
export default function Challenges() {
  const {Data} = useContext(AppContext);

  return (
    <div className='challenge'>
      <Navbar />
      {/* <InnerNav /> */}
      <div className="cardCont">
      {
        Data.map((card)=>{
          return <ChallengeCard img = {card.url} heading = {card.title} 
          link = {card.link} cont = {card.content} />
        })
      }
       </div>
    <Footer></Footer>
    </div>
  )
}

