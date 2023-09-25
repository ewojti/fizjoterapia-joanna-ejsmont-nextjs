import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import courses from "../constants/courses";

const AboutMeModal = ({ isOpen, handleClose }) => {
  return (
    isOpen && (
      <div className="app__modal">
        <div onClick={handleClose} className="modal-overlay"></div>
        <div className="app__modal-content">
          <h2 className="app__heading-h2">Ukończone kursy:</h2>
          <div className="p__cormorant">
            {courses.map((course) => (
              <div key={course.id.toString} className="app__aboutme-course">
                <div className="app__aboutme-icons">
                  <BsCheck2Square />
                </div>
                <p className="p__cormorant">
                  {course.title}
                </p>
              </div>
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
