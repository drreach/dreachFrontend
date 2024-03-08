import React from 'react';
import './hero.css';
import banner_img from './banner_img.png';

const Hero = () => {
  return (
    <div>
      <section class="section1">
        <div class="hero">
            <div class="hero-text">
                <h3 class="heading1">| WELCOME TO DR.REACH</h3>
                <h1 class="heading2">We are <br /><span class="purple">Committed</span> To <br /> Your <span class="purple">Health.</span></h1>
                <button class="btn2">Appointment <i class='bx bx-play-circle'></i></button>
            </div>

            <div class="hero-img">
                <img src={banner_img} alt="" />
            </div>
        </div>
    </section>
    </div>
  );
}

export default Hero;
