import React from "react";
import courses from "../constants/courses";


const AboutMeModal = ({isOpen, handleClose}) => {

  return (
    isOpen && (
      <div className="app__modal">
        <div onClick={handleClose} className="modal-overlay"></div>
        <div className="app__modal-content">
          <h2 className="app__heading-h2">Ukończone kursy:</h2>
          <div className="p__cormorant">
            {courses.map((course) => (
                <p className="p__cormorant" key={course.id.toString()}>
                  {course.title}
                </p>
            ))}
          </div>
          <button className="modal-close custom__button" onClick={handleClose}>
            Zamknij
          </button>
        </div>
      </div>
    )
  );
};

export default AboutMeModal;
