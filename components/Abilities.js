import React, { useEffect } from "react";
import services from "../constants/data";
import "aos/dist/aos.css";
import Aos from "aos";
import { nanoid } from "nanoid";

const Abilities = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div id="uslugi" className="app__abilities section__padding">
      <div className="app__border-section" data-aos="fade-out"></div>
      <h1 className="app__heading-h1" data-aos="fade-right">
        W czym mogę Ci pomóc?
      </h1>
      <div className="app__abilities-list">
        {services.map((service) => (
          <div
            className="app__abilities-list-item"
            key={service.id.toString()}
            id={service.id}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="app__abilities-list-item-description">
              <h2 className="app__heading-h2">{service.title}</h2>
              <ul>
                {service.types.map((type) => (
                  <li key={nanoid()}>
                    <span className="p__cormorant">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
