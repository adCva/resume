import React from 'react';

function Hero() {
  return (
    <div className='hero-wrapper'>
      <div className='hero-container'>
        <img src="./images/banner.jpg" alt="Banner" loading='lazy'/>
        <div className='hero-text-container'>
          <h1>Build smart, fast and effective Resume's in no time.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate sapien nec sagittis aliquam malesuada.</p>
          <button>Create Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;