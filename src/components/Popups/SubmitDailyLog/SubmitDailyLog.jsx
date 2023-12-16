import "../SubmitDailyLog/SubmitDailyLog.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SubmitDailyLog = () => {
  const [isSubmitPopupOpen, setSubmitPopupOpen] = useState(false);

  //functionality to interact with the popup
  const openSubmitPopup = () => {
    setSubmitPopupOpen(true);
  };

  const closeSubmitPopup = () => {
    setSubmitPopupOpen(false);
  };

  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
*/}

      <button
        tabIndex="1"
        alt="submit your daily log"
        onClick={openSubmitPopup}
        className="submit-daily-log-btn"
      >
        Submit
      </button>

      {isSubmitPopupOpen && (
        <section tabIndex="2" className="log-submit-popup-container">
          <div className="log-submit-popup">
            <div className="log-submit-popup-content">
              <h1 tabIndex="3" className="log-submit-popup-h1">
                Entry Saved
              </h1>
              <p tabIndex="4" className="log-submit-popup-p">
                Your entry was successfully saved! You can check it in your
                Daily Log Summary.
              </p>
            </div>

            <Link
              to="/home"
              tabIndex="5"
              className="log-submit-popup-close-link"
            >
              <button
                tabIndex="6"
                className="log-submit-popup-close-btn"
                onClick={closeSubmitPopup}
              >
                OK
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};
