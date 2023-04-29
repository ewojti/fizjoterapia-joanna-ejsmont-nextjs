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
          <div className="app__priceList p__cormorant">
            {priceData.map((price) => (
              <div key={price.id.toString()} className="app__priceList-item">
                <p>{price.name}</p>
                <span>{price.cost}</span>
              </div>
            ))}
          </div>
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
