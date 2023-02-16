import React from 'react';

function Hero() {
  return (
    <div className='hero-wrapper'>
      <div className='hero-container'>
        <img src="./images/undraw_online_cv.svg" alt="Banner" loading='lazy'/>
        <div className='hero-text-container'>
          <h1>Build smart, fast and effective Resume's in no time.</h1>
          <p>Create your resume with us so that the HR parasites can ignore all your aplications and ghost you then pretend it's somehow your fault. But hey, atleast we don't save and sell your personal data to other while pretending you that we care. #toxicPositivity</p>
          <button>Create Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;