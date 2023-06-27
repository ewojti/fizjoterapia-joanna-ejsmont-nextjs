import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/constants/images";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Navbar = () => {
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
    <nav className="app__navbar fixed-top slide-in-top">
      <div className="app__navbar-logo" onClick={scrollToTop}>
        <Link className="app__navbar-logo-link" href="/">
          <Image
            className="app__navbar-logo-desktop"
            src={images.logo_header}
            alt="fizjoterapia joanna Ejsmont"
            sizes="(min-width: 200px) 100vw,
              30vw"
            priority
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
            <Link href="#uslugi">Usługi</Link>
          </li>
          <li>
            <Link href="#omnie">O mnie</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#kontakt">Kontakt</Link>
          </li>
        </ul>
        <div className="app__navbar-links-socials">
          <Link
            className="app__react-icons"
            href="https://www.facebook.com/profile.php?id=100064665101610"
            target="_blank"
          >
            <AiOutlineFacebook />
          </Link>
          <Link
            className="app__react-icons"
            href="https://www.instagram.com/fizjoterapia_ejsmont/"
            target="_blank"
          >
            <AiOutlineInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
