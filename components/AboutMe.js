import React, { useEffect } from "react";
import AboutMeModal from "./AboutMeModal";
import Image from "next/image";
import images from "@/constants/images";
import "aos/dist/aos.css";
import Aos from "aos";

const AboutMe = () => {
    useEffect(() => {
      Aos.init({});
    }, []);
  return (
    <div id="omnie" className="app__aboutme section__padding">
      <div
        className="app__aboutme-img app__aboutme-container"
        data-aos="fade-in"
        data-aos-duration="1800"
      >
        <Image src={images.aboutme} alt="fizjoterapia joanna ejsmont" />
      </div>
      <div
        className="app__aboutme-description app__aboutme-container"
        data-aos="fade-in"
        data-aos-duration="1800"
      >
        <div className="app__aboutme-description-text">
          <h1 className="app__heading-h2">Kim jestem?</h1>
          <div
            className="app__border-section-green"
            data-aos="fade-in"
          ></div>
          <p className="p__cormorant">
            Jestem absolwentką studiów licencjackich oraz magisterskich z
            kierunku fizjoterapia na Uniwersytecie Medycznym w Białymstoku.
            <br />
            <br />
            Od 2018 roku pracuję jako fizjoterapeutka, a w 2021 roku założyłam
            własny gabinet w Sokółce. Na codzień pracuję z pacjentami z
            dolegliwościami bólowymi kręgosłupa, stawów obwodowych, bólami
            głowy, po udarach mózgu. Zajmuje się również wadami stóp u dzieci
            oraz wadami postawy. Dodatkowo rozwijam się w kierunku fizjoterapii
            kobiet w trakcie i po ciąży.
          </p>
        </div>
          <AboutMeModal />
      </div>
    </div>
  );
};

export default AboutMe;
