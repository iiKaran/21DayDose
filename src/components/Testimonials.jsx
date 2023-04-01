import React from 'react'
import TestCard from './TestCard'
export default function Testimonials() {
  return (
    <div className='test-cont'>
      <h3>Testimonials</h3>
      <div className="edge"></div>
      <div className='testimonial'>
         <TestCard />
         <TestCard />
         <TestCard />
      </div>
    </div>
  )
}
