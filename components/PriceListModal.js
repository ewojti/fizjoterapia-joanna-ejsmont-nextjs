import React, {useEffect } from "react";
import priceData from "../constants/priceData";
import "aos/dist/aos.css";
import Aos from "aos";

const PriceListModal = ({isOpen, handleCloseModal}) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    isOpen && (
      <div className="app__modal">
        <div onClick={handleCloseModal} className="modal-overlay"></div>
        <div className="app__modal-content">
          <h2 className="app__heading-h1">Cennik:</h2>
          <ul className="p__cormorant">
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
            onClick={handleCloseModal}
          >
            Zamknij
          </button>
        </div>
      </div>
    )
  );
};

export default PriceListModal;
