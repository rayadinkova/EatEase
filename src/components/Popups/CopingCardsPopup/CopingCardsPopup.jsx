import "../CopingCardsPopup/CopingCardsPopup.css";
import { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";

export const CopingCardsPopup = () => {
  const [isCardPopupOpen, setCardPopupOpen] = useState(false);

  //functionality to interact with the popup
  const openCardPopup = () => {
    setCardPopupOpen(true);
  };

  const closeCardPopup = () => {
    setCardPopupOpen(false);
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
        alt="learn more what Coping Cards are about"
        onClick={openCardPopup}
        className="cards-question"
      />

      {isCardPopupOpen && (
        <section tabIndex="2" className="cards-popup-container">
          <div className="cards-popup">
            <div className="cards-popup-content">
              <h1 tabIndex="3" className="cards-popup-h1">
                Coping cards
              </h1>
              <p tabIndex="4" className="cards-popup-p">
                This tool will help you reinforce positive self-talk and become
                more mindful of your thoughts through positive affirmations,
                suggested by the app, or created personally, by you.
              </p>
            </div>
            <button
              tabIndex="5"
              className="cards-popup-close-btn"
              onClick={closeCardPopup}
            >
              Okay, got it!
            </button>
          </div>
        </section>
      )}
    </>
  );
};
