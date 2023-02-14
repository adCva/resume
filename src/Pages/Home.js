import React from 'react';
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import WhyUs from '../Components/WhyUs';

function Home() {
  return (
    <div>
        <header>
            <Nav />
            <Hero />
        </header>
        <main>
          <WhyUs />
        </main>
    </div>
  )
}

export default Home;