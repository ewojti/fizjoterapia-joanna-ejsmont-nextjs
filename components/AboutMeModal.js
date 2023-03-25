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
          <div className="app__aboutMeModal app__modal-content">
            <h2 className="app__heading-h2">Kim jestem?</h2>
            <p className="p__lato">
              Ukończyłam studia licencjackie oraz magisterskie z kierunku
              fizjoterapia na Uniwersytecie Medycznym w Białymstoku.
              <br />
              <br />
              Od 2018 roku pracuję jako fizjoterapeutka, a w 2021 roku założyłam
              własny gabinet w Sokółce. Na codzień pracuję z pacjentami z
              dolegliwościami bólowymi kręgosłupa, stawów obwodowych, bólami
              głowy, po udarach mózgu. Zajmuje się również wadami stóp u dzieci
              oraz wad postawy. Dodatkowo rozwijam się w kierunku fizjoterapii
              kobiet w trakcie i po ciąży.
            </p>
            <br />
            Ukończone kursy:
            <ul className="app__aboutMeModal-courses p__lato">
              <li>2023 - Integracyjna terapia blizn</li>
              <li>
                2022 - Ciąża i przygotowanie do porodu - postępowanie
                fizjoterapeutyczne
              </li>
              <li>2022 - Globalna terapia stopy</li>
              <li>2021 - Ćwiczenia w korekcji rozejścia mięśni brzucha(DRA)</li>
              <li>2021 - Trening medyczny dla zdrowia dna miednicy</li>
              <li>2020 - Terapia Manualna Maitland poziom 1 </li>
              <li>2019 - Przewlekła hemiplegia - wyzwania dla terapeuty</li>
              <li>
                2019 - Ostry dysk w modelu Postural Fulcrum by Rafał Krasicki
              </li>
              <li>2018 - Kinesiotaping Medyczno- Sportowy</li>
              <li>2018 - Kurs PNF podstawowy </li>
              <li>2017 - Masaż tkanek głębokich</li>
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
