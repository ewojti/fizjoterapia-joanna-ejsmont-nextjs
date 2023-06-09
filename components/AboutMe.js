import React, { useEffect, useState } from "react";
import AboutMeModal from "./AboutMeModal";
import Image from "next/image";
import images from "@/constants/images";
import { BsCheck2Square } from "react-icons/bs";

const AboutMe = () => {
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
    <>
      <div id="omnie" className="app__aboutme section__padding">
        <div className="app__border-section-grey"></div>
        <h2 className="app__heading-h2">Kim jestem?</h2>
        <div className="app__aboutme-container">
          <div className="app__aboutme-img">
            <Image
              src={images.aboutme}
              alt="fizjoterapia joanna ejsmont"
              sizes="(min-width: 768px) 40vw
            (max-width: 768px) 90vw"
              priority
            />
          </div>
          <div className="app__aboutme-description">
            <div className="app__aboutme-description-text">
              <div className="app__aboutme-icons">
                <BsCheck2Square />
              </div>
              <p className="p__cormorant">
                Jestem absolwentką studiów licencjackich oraz magisterskich z
                kierunku fizjoterapia na Uniwersytecie Medycznym w Białymstoku.
              </p>
            </div>
            <div className="app__aboutme-description-text">
              <div className="app__aboutme-icons">
                <BsCheck2Square />
              </div>
              <p className="p__cormorant">
                Od 2018 roku pracuję jako fizjoterapeutka, a w 2021 roku
                założyłam własny gabinet w Sokółce. Na codzień pracuję z
                pacjentami z dolegliwościami bólowymi kręgosłupa, stawów
                obwodowych, bólami głowy, po udarach mózgu.
              </p>
            </div>
            <div className="app__aboutme-description-text">
              <div className="app__aboutme-icons">
                <BsCheck2Square />
              </div>
              <p className="p__cormorant">
                Zajmuje się również wadami stóp u dzieci oraz wadami postawy.
                Dodatkowo rozwijam się w kierunku fizjoterapii kobiet w trakcie
                i po ciąży.
              </p>
            </div>
            <button className="custom__button" onClick={handleOpenModal}>
              Ukończone kursy
            </button>
          </div>
        </div>
      </div>
      <AboutMeModal isOpen={isOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default AboutMe;
