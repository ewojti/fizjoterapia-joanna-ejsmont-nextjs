import React, { useState, useEffect } from "react";
import priceData from "../constants/priceData";
import "aos/dist/aos.css";
import Aos from "aos";

const PriceList = () => {
  const [modal, setModal] = useState(false);
    useEffect(() => {
      Aos.init({});
    }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        className="custom__button"
        data-aos="fade-up"
        data-aos-delay="1200"
        onClick={toggleModal}
      >
        Sprawdź cennik
      </button>
      {modal ? (
        <div className="app__modal">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="app__modal-content">
            <h1 className="app__heading-h1">Cennik:</h1>
            <ul className="app__pricelist-items p__cormorant">
              {priceData.map((price) => (
                <li key={price.id.toString()}>
                  <p>
                    {price.name}
                    <span>{price.cost}</span>
                  </p>
                </li>
              ))}
            </ul>
            <button
              className="modal-close custom__button"
              onClick={toggleModal}
            >
              Zamknij
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PriceList;
