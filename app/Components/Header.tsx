"use client";

import React, { useEffect, useRef } from "react";
import "../style.css";

export default function Header() {
  const menuIconRef = useRef<HTMLDivElement | null>(null);
  const navBarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const menuIcon = menuIconRef.current;
    const navBar = navBarRef.current;

    if (menuIcon && navBar) {
      const toggleMenu = () => {
        menuIcon.classList.toggle("bx-x");
        navBar.classList.toggle("active");
      };

      menuIcon.addEventListener("click", toggleMenu);

      const handleScroll = () => {
        if (menuIcon.classList.contains("bx-x") && navBar.classList.contains("active")) {
          menuIcon.classList.remove("bx-x");
          navBar.classList.remove("active");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        menuIcon.removeEventListener("click", toggleMenu);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <header className="header">
      <a href="#" className="logo">Raheem</a>
      <i className="bx bx-menu" id="menu-icon" ref={menuIconRef}></i>
      <nav className="navbar" ref={navBarRef}>
        <a href="#home" id="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
