import React, { useState } from "react";

const AboutMeModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button className="custom__button" onClick={toggleModal}>
        czytaj więcej
      </button>
      {modal ? (
        <div className="app__modal">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="app__modal-content">
            <h2 className="app__heading-h2">Ukończone kursy:</h2>
            <ul className="p__cormorant">
              <li>
                <p>2023 - Integracyjna terapia blizn</p>
              </li>
              <li>
                <p>
                  2022 - Ciąża i przygotowanie do porodu - postępowanie
                  fizjoterapeutyczne
                </p>
              </li>
              <li>
                <p>2022 - Globalna terapia stopy</p>
              </li>
              <li>
                <p>2021 - Ćwiczenia w korekcji rozejścia mięśni brzucha(DRA)</p>
              </li>
              <li>
                <p>2021 - Trening medyczny dla zdrowia dna miednicy</p>
              </li>
              <li>
                <p>2020 - Terapia Manualna Maitland poziom 1 </p>
              </li>
              <li>
                <p>2019 - Przewlekła hemiplegia - wyzwania dla terapeuty</p>
              </li>
              <li>
                <p>
                  2019 - Ostry dysk w modelu Postural Fulcrum by Rafał Krasicki
                </p>
              </li>
              <li>
                <p>2018 - Kinesiotaping Medyczno- Sportowy</p>
              </li>
              <li>
                <p>2018 - Kurs PNF podstawowy </p>
              </li>
              <li>
                <p>2017 - Masaż tkanek głębokich</p>
              </li>
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

export default AboutMeModal;
