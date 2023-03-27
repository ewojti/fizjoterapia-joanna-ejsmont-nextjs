import React, { useEffect } from "react";
import PriceList from "./PriceList";
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
            <p className="p__cormorant">Osiedle Centrum 21, Sokółka</p>
          </div>
          <div
            className="app__header-info-item"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <span className="app__react-icons">
              <HiPhone />
            </span>
            <p className="p__cormorant">793-183-080</p>
          </div>
        </div>
        <div className="app__header-btn">
          <button
            className="custom__button"
            data-aos="fade-up"
            data-aos-delay="1300"
          >
            <a href="tel:793183080">Umów wizytę</a>
          </button>
          <PriceList />
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
        />
        <Image
          className="app__header-img-mobile"
          src={images.headerBalanc}
          alt="fizjoterapia rehabilitacja sokółka"
          priority
        />
      </div>
    </div>
  );
};

export default Header;
