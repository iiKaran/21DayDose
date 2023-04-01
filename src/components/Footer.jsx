import React from 'react'
import {FaInstagram,FaLinkedinIn, FaFacebookF, FaTwitter,FaYoutube}from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
          
        <div className="socialmedia">

          <span>
          <FaFacebookF color='#5ae4a8' />
            </span>
            <span>
            <FaInstagram color = "#5ae4a8" />
            </span>
          <span>

          <FaLinkedinIn color='#5ae4a8' />
          </span>
          <span>

          <FaTwitter color='#5ae4a8'/>
          </span>
          <span>            
          <FaYoutube color='#5ae4a8'/>
          </span>
        </div>

      <hr />
      <span className='right'>
      copyright- @karansehgal-Allright-reserved.
      </span>
    </div>

  )
}
