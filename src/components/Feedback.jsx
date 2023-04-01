import React from 'react'
import img from './images/feed.jpg'
export default function Feedback() {
  return (
    <div className='feedcont'>
      <div className="feed-item">
        <div className='feed'> FeedBack</div>
        <form className='feed-form' >
          <input type="text" placeholder='Enter Your Name  : ' name='name' />
          <input type="email" placeholder='Enter Your Email :  ' name='email' />
          <textarea name="feedback" id="" cols="30" rows="10" placeholder='Enter Your Views'></textarea>
        <div className="btn" id='formbtn'>Submit </div>
        </form>
        
      </div>
      <div className="feed-item">
        <img src={img} alt="" />
      </div>
    </div>
  )
}
