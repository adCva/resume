import React from 'react';
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import WhyUs from '../Components/WhyUs';
import HowTo from '../Components/HowTo';

function Home() {
  return (
    <div>
        <header>
            <Nav />
            <Hero />
        </header>
        <main>
          <HowTo />
          <WhyUs />
        </main>
    </div>
  )
}

export default Home;