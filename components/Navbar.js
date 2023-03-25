import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";
import "aos/dist/aos.css";
import Aos from "aos";

const Navbar = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="app__navbar fixed-top">
      <div className="app__navbar-logo" onClick={scrollToTop} >
        <Link className="app__navbar-logo-link"
        href='/'>
          <Image
            className="app__navbar-logo-desktop"
            src={images.logo_header}
            alt="fizjoterapia joanna Ejsmont"
          />
        </Link>
      </div>
      <button
        onClick={handleToggle}
        className={`hamburger ${isActive ? "hamburger--active" : ""}`}
      >
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
      <div
        className={`app__navbar-links ${
          isActive ? "app__navbar-links--active" : ""
        }`}
      >
        <ul className="p__cormorant" onClick={handleToggle}>
          <li>
            <a href="#uslugi">Usługi</a>
          </li>
          <li>
            <a href="#omnie">O mnie</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
        <Link
          className="app__navbar-icons"
          href="https://www.facebook.com/profile.php?id=100064665101610"
          target="_blank"
        >
        <Image
          className="app__navbar-icons-fb"
          src={images.facebook}
          alt="fizjoterapia"
        />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
