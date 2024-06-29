import React from "react";
import "./contact.css";

import contact_img from "./contact_img.png";
const Contact = () => {
  return (
    <div>
      <section class="section4">
        <h1 class="head7">We want to help.</h1>
        <div class="block1">
          <img src={contact_img} alt="" />
          <div class="text">
            <h2>Follow us on social media</h2>
            <div class="link1">
              <a href="">
                <i class="bx bx1 bxl-facebook-circle"></i>
              </a>
              <a href="">
                <i class="bx bx1 bxl-instagram"></i>
              </a>
              <a href="">
                <i class="bx bx1 bxl-twitter"></i>
              </a>
            </div>
            <div class="add">
              <div class="officeadd bx-add">
                <h1 class="head8">Office Address</h1>
                <p class="head9">123, ABC Street Bhubaneswar.</p>
              </div>
              <div class="email bx-add">
                <h1 class="head8">Email Address</h1>
                <p class="head9">drreach123@gmail.com</p>
              </div>
              <div class="mobile bx-add">
                <h1 class="head8">Phone Number</h1>
                <p class="head9">(+91) 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="center">
          Copyright &copy; Dr. Reach. All rights reserved!
        </div>
      </footer>
    </div>
  );
};

export default Contact;
