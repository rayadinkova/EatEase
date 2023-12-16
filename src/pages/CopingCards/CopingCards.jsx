import "../CopingCards/CopingCards.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

{
  /* Importing images */
}

import backarrow from "../Mood/vectors/backarrow.svg";
import { CopingCardsPopup } from "../../components/Popups/CopingCardsPopup/CopingCardsPopup";
import { CopingCardsFilter } from "../../components/CopingCardsFilter/CopingCardsFilter";

export const CopingCards = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
-Using proper input types */}
      <section tabIndex="1" className="cards-header">
        <header tabIndex="2" className="cards-header-content">
          <Link to="/home" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="cards-arrow-img"
            />
          </Link>
          <h1 tabIndex="5" className="cards-h1">
            Coping Cards
          </h1>

          <CopingCardsPopup tabIndex="6" />
        </header>
      </section>

      <section tabIndex="7" className="coping-cards-content">
        <h2 tabIndex="8" className="coping-cards-h2">
          Read through these cards to help you ride out your uncomfortable
          feelings and urges for destructive behavior
        </h2>
      </section>
      <CopingCardsFilter tabIndex="9" />

      <Navbar tabIndex="10" />
    </>
  );
};
