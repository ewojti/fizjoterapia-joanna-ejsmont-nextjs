import React from "react";
import courses from "../constants/courses";


const AboutMeModal = ({isOpen, handleClose}) => {

  return (
    isOpen && (
      <div className="app__modal">
        <div onClick={handleClose} className="modal-overlay"></div>
        <div className="app__modal-content">
          <h2 className="app__heading-h2">Ukończone kursy:</h2>
          <ul className="p__cormorant">
            {courses.map((course) => (
              <li key={course.id.toString()}>
                <p className="p__cormorant">{course.title}</p>
              </li>
            ))}
          </ul>
          <button className="modal-close custom__button" onClick={handleClose}>
            Zamknij
          </button>
        </div>
      </div>
    )
  );
};

export default AboutMeModal;
