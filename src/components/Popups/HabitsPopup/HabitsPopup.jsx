import "../HabitsPopup/HabitsPopup.css";
import { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";

export const HabitsPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  //functionality to interact with the popup
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
*/}
      <CiCircleQuestion
        tabIndex="1"
        alt="learn more what Healthy Habits are about"
        onClick={openPopup}
        className="habits-question"
      />

      {isPopupOpen && (
        <section tabIndex="2" className="popup-container">
          <div className="popup">
            <div className="popup-content">
              <h1 tabIndex="3" className="popup-h1">
                Healthy Habits
              </h1>
              <p tabIndex="4" className="habits-popup-p">
                This tool will give you valuable advice for improving the
                quality of your life, by making sure your basic biological,
                psychological and social needs are met. They are important
                influencers on how you see yourself and others, how you handle
                challenges and the nature of your attitude towards your overall
                daily life.
              </p>
            </div>
            <button
              tabIndex="5"
              className="popup-close-btn"
              onClick={closePopup}
            >
              Okay, got it!
            </button>
          </div>
        </section>
      )}
    </>
  );
};
