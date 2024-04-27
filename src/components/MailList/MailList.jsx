import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className='mail'>
      <h3 className="mailList">Save time, save money</h3>
      <span className="mailDesc">Sign up and we will send the best deals to you </span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Your mail ' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
