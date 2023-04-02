import React, { useState, useEffect } from "react";
import PriceListModal from "./PriceListModal";
import Image from "next/image";
import images from "@/constants/images";
import { ImLocation2 } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import "aos/dist/aos.css";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

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
        <h1
          className="app__heading-h1"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Twój gabinet fizjoterapii w <span>Sokółce</span>
        </h1>
        <div className="app__header-contact">
          <div
            className="app__header-info-item"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <span className="app__react-icons">
              <ImLocation2 />
            </span>
            <h3 className="app__heading-h3">Osiedle Centrum 21, Sokółka</h3>
          </div>
          <div
            className="app__header-info-item"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <span className="app__react-icons">
              <HiPhone />
            </span>
            <h3 className="app__heading-h3">793-183-080</h3>
          </div>
        </div>
        <div className="app__header-btn">
          <button
            className="custom__button"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <a href="tel:+48793183080">Umów wizytę</a>
          </button>
          <button
            className="custom__button"
            data-aos="fade-up"
            data-aos-delay="1300"
            onClick={handleOpenModal}
          >
            Sprawdź cennik
          </button>
        </div>
        <div className="app__header-number"></div>
      </div>
      <div
        className="app__header-img"
        data-aos="fade-out"
        data-aos-duration="4000"
      >
        <Image
          className="app__header-img-desktop"
          src={images.header}
          alt="fizjoterapia rehabilitacja sokółka"
          priority
          sizes="(min-width: 1024px) 50vw,
              33vw"
        />
        <Image
          className="app__header-img-mobile"
          src={images.headerBalanc}
          alt="fizjoterapia rehabilitacja sokółka"
          priority
          sizes="(max-width: 1024px) 100vw,
              33vw"
        />
      </div>
      <PriceListModal handleCloseModal={handleCloseModal} isOpen={isOpen} />
    </div>
  );
};

export default Header;
