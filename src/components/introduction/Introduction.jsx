import React from 'react'
import "./introduction.css"

export default function Introduction() {
  return (
    <div className='introduction'>
        <div className='intro__welcome'>
            Welcome to Dayson's Personal Portfolio
        </div>
        <div className='intro__description'>
            My name is Dayson!
        </div>
        <button className='intro__fancy-button'>
            Learn More
        </button>
    </div>
  )
}
