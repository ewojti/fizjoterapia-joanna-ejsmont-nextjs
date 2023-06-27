import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import Image from "next/image";
import images from "@/constants/images";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="app__footer section__padding">
      <div className="app__border-section-grey"></div>
      <div className="app__footer-items">
        <div className="app__footer-items-company">
          <h2 className="app__heading-h2">Dane firmy:</h2>
          <p className="p__cormorant">NIP: 545-182-36-11</p>
          <p className="p__cormorant">REGON: 389360903</p>
        </div>
        <div className="app__footer-items-icons">
          <Image
            className="app__navbar-logo-desktop"
            src={images.logo_footer}
            alt="fizjoterapia joanna Ejsmont"
            sizes="(min-width: 200px) 100vw,
              30vw"
            priority
          />
          <div className="app__footer-item-icons-social">
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
          <div className="app__footer--copyright">
            © 2023 All rights reserved Fizjoterapia Joanna Ejsmont
          </div>
        </div>
        <div className="app__footer-items_work">
          <h2 className="app__heading-h2">Godziny otwarcia</h2>
          <p className="p__cormorant">Poniedziałek-Piątek</p>
          <p className="p__cormorant">8:00-19:00</p>
          <p className="p__cormorant">Sobota</p>
          <p className="p__cormorant">8:00-14:00</p>
          <p className="p__cormorant">Niedziela i święta</p>
          <p className="p__cormorant">Nieczynne</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
