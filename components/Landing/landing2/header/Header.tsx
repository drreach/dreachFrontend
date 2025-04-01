import React from "react";
import Image from "next/image";
import "./header.css";

const Header = () => {
  const onMenuClick = () => {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    }
  };

  // if(menuIcon && navbar){
  // menuIcon.onclick = () => {
  //     menuIcon.classList.toggle('bx-x');
  //     navbar.classList.toggle('active');
  // };

  // }

  // let sections = document.querySelectorAll('section');
  // let navlinks = document.querySelectorAll('header nav a');

  // window.onscroll = ()=>{

  //     let header = document.querySelector('header');

  //     if(header && menuIcon && navbar){
  //       header.classList.toggle('sticky' , window.scrollY>100);

  //       menuIcon.classList.remove('bx-x');
  //       navbar.classList.remove('active');

  //     }

  // }

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <Image src={"/"} alt="" width={40} height={40} />
          Dr. Reach
        </a>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn1">Login</button>
      </header>
    </div>
  );
};

export default Header;
