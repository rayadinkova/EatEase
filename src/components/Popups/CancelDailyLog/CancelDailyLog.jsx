import "../CancelDailyLog/CancelDailyLog.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CancelDailyLog = () => {
  const [isCancelPopupOpen, setCancelPopupOpen] = useState(false);

  //functionality to interact with the popup
  const openCancelPopup = () => {
    setCancelPopupOpen(true);
  };

  const closeCancelPopup = () => {
    setCancelPopupOpen(false);
  };

  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
*/}
      <h1
        tabIndex="1"
        alt="cancel your daily log"
        onClick={openCancelPopup}
        className="cancel-daily-log-h1"
      >
        Cancel
      </h1>

      {isCancelPopupOpen && (
        <section tabIndex="2" className="log-cancel-popup-container">
          <div className="log-cancel-popup">
            <div className="log-cancel-popup-content">
              <h1 tabIndex="3" className="log-cancel-popup-h1">
                Cancel Entry
              </h1>
              <p tabIndex="4" className="log-cancel-popup-p">
                Any unsaved changes will be lost. Are you sure you want to
                continue?
              </p>
            </div>

            <Link
              to="/home"
              tabIndex="5"
              className="log-cancel-popup-close-link"
            >
              <button
                tabIndex="6"
                className="log-cancel-popup-close-btn"
                onClick={closeCancelPopup}
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
