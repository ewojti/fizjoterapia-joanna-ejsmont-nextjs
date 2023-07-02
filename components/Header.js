import React, { useState, useEffect } from "react";
import PriceListModal from "./PriceListModal";
import Image from "next/image";
import images from "@/constants/images";
import { ImLocation2 } from "react-icons/im";
import { HiPhone } from "react-icons/hi";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [isOpen]);

  return (
    <div className="app__header">
      <div className="app__header-text">
        <h1 className="app__heading-h1 fade-in">
          Twój gabinet fizjoterapii w Sokółce
        </h1>
        <div className="app__header-contact">
          <div className="app__header-contact-item fade-in-left">
            <span className="app__react-icons">
              <ImLocation2 />
            </span>
            <p className="p__cormorant">Osiedle Centrum 21, Sokółka</p>
          </div>
          <div className="app__header-contact-item fade-in-left-sec">
            <span className="app__react-icons">
              <HiPhone />
            </span>
            <p className="p__cormorant">793-183-080</p>
          </div>
        </div>
        <div className="app__header-btn fade-in-bottom">
          <a href="tel:+48793183080">
            <button className="custom__button">Umów wizytę</button>
          </a>
          <button className="custom__button" onClick={handleOpenModal}>
            Sprawdź cennik
          </button>
        </div>
        <div className="app__header-number"></div>
      </div>
      <div className="app__header-img">
        <Image
          className="app__header-img-desktop"
          src={images.header}
          alt="fizjoterapia rehabilitacja sokółka"
          priority
          sizes="(min-width: 768px) 50vw"
          placeholder="blur"
        />
        <Image
          className="app__header-img-mobile"
          src={images.headerBalanc}
          alt="fizjoterapia rehabilitacja sokółka"
          priority
          sizes="(max-width: 768px) 50vw"
          placeholder="blur"
        />
      </div>
      <PriceListModal handleCloseModal={handleCloseModal} isOpen={isOpen} />
    </div>
  );
};

export default Header;
