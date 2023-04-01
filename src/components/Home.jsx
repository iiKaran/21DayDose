import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Testimonials from './/Testimonials'
import Feedback from './Feedback'
import Footer from './Footer'
import Work from './Work'
export default function Home() {
  return (
  <div>
  <Navbar />
 <Intro />
 <div className="work-cont">
  <h2> Now Do what you want to do</h2>
  <div className='work-sub-cont'>
 <Work img={"https://www.positivemindset.blog/site/img/star.png"} heading={"Choose the best challenge for you"} cont={"Or create your own, do it for 21 days, and track your habits"} />
 <Work heading={"Daily journal"} cont={"Write your everyday thoughts and track your mood"} img={"https://www.positivemindset.blog/site/img/pencil.png"}/>
 <Work img={"https://www.positivemindset.blog/site/img/inspiration.png"} cont={"You'll receive daily notifications to help you achieve your goals"} heading = {"Motivational notifications"}/>
 </div>
 </div>
 <Testimonials/>
 <Feedback />
 <Footer />
 </div>
  )
}
