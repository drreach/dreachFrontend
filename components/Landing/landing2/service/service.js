import React from "react";
import './service.css';
import hc from './hc.png';
import onlinemode from './onlinemode.png';
import offlinemode from './offlinemode.png';
import video from './videocall.png';
import home from './homevisit.png';

const Service = () => {
  return (
    <div>
      <section class="section2">
        <h1 class="heading3">We Provide</h1>
        <div class="big-box">
          <div class="block-box">
            <div class="boxline1">
              <a href="#"><div class="box">
                <img src={onlinemode} alt="" />
                <h1>Online Mode</h1>
              </div></a>

              <a href="#"><div class="box">
                <img src={offlinemode} alt="" />
                <h1>Offline Mode</h1>
                
              </div></a>
            </div>

            <div class="boxline1">
              <a href="#"><div class="box">
                <img src={home} alt="" />
                <h1>Home Visit</h1>
                
              </div></a>
             <a href="#"> <div class="box">
                <img src={video} alt="" />
                <h1>Video Call</h1>
                
              </div></a>
            </div>
          </div>
          <img src={hc} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Service;
