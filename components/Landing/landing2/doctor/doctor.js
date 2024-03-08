import React from 'react';
import './doctor.css';
import doctor from './dr.jpg';


const Doctor = () => {
  return (
    <div>
      <section class="section3">
        <h3 class="heading4">| Meet Our Doctors</h3>
        <h1 class="heading5">Our Specialist</h1>

        <div class="card-box">
            <div class="card">
                <img src={doctor} alt=""/>
                <h1 class="head6">Dr. Shyam Barua</h1>
                <h3 class="head6">Cardiology</h3>
                <h5 class="head6">(MBBS)</h5>
                <button class="btn3">Book Now</button>
            </div>

            <div class="card">
                <img src={doctor} alt=""/>
                <h1 class="head6">Dr. Shyam Barua</h1>
                <h3 class="head6">Cardiology</h3>
                <h5 class="head6">(MBBS)</h5>
                <button class="btn3">Book Now</button>
            </div>
            <div class="card">
                <img src={doctor} alt=""/>
                <h1 class="head6">Dr. Shyam Barua</h1>
                <h3 class="head6">Cardiology</h3>
                <h5 class="head6">(MBBS)</h5>
                <button class="btn3">Book Now</button>
            </div>
            <div class="card">
                <img src={doctor} alt=""/>
                <h1 class="head6">Dr. Shyam Barua</h1>
                <h3 class="head6">Cardiology</h3>
                <h5 class="head6">(MBBS)</h5>
                <button class="btn3">Book Now</button>
            </div>
            <div class="card">
                <img src={doctor} alt=""/>
                <h1 class="head6">Dr. Shyam Barua</h1>
                <h3 class="head6">Cardiology</h3>
                <h5 class="head6">(MBBS)</h5>
                <button class="btn3">Book Now</button>
            </div>
        </div>


    </section>
    </div>
  );
}

export default Doctor;
