import React, { useEffect } from "react";
import services from "../constants/data";
import "aos/dist/aos.css";
import Aos from "aos";
import { nanoid } from "nanoid";
import Image from "next/image";

const Abilities = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div id="uslugi" className="app__abilities section__padding">
      <div className="app__border-section-grey" data-aos="fade-right"></div>
      <h2 className="app__heading-h1" data-aos="fade-up">
        W czym mogę Ci pomóc?
      </h2>
      <div className="app__abilities-list">
        {services.map((service) => (
          <>
            <div className="app__abilities--arrow">
              <div
                className="app__abilities--arrow-vertical"
                data-aos="fade-in"
              ></div>
              <div
                className="app__abiliteis--arrow-circle"
                data-aos="fade-in"
              ></div>
              <div
                className="app__abilities--arrow-vertical"
                data-aos="fade-in"
              ></div>
              <div
                className="app__abiliteis--arrow-circle"
                data-aos="fade-in"
              ></div>
              <div
                className="app__abilities--arrow-vertical"
                data-aos="fade-in"
              ></div>
              <div
                className="app__abiliteis--arrow-circle"
                data-aos="fade-in"
              ></div>
              <div
                className="app__abilities--arrow-vertical"
                data-aos="fade-in"
              ></div>
            </div>
            <div
              className="app__abilities-list-item"
              key={service.id.toString()}
              id={service.id}
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-duration="400"
            >
              <Image
                src={service.image}
                alt="fizjoterapia rehabilitacja sokółka"
                priority
                sizes="(min-width: 768px) 30vw"
              />
              <div className="app__abilities-list-item-description">
                <h2 className="app__heading-h2">{service.title}</h2>
                <div className="app__border-section-green"></div>
                <ul className="text-focus-in">
                  {service.types.map((type) => (
                    <li key={nanoid()}>
                      <span className="p__cormorant">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
