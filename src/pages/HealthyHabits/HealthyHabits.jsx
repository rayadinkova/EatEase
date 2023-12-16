import { Link } from "react-router-dom";
import "../HealthyHabits/HealthyHabits.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { HabitsPopup } from "../../components/Popups/HabitsPopup/HabitsPopup";

{
  /* Importing images */
}

import backarrow from "../HealthyHabits/vectors/backarrow.svg";
import mood from "../HealthyHabits/vectors/mood.svg";
import anxiety from "../HealthyHabits/vectors/anxiety.svg";
import social from "../HealthyHabits/vectors/social.svg";

export const HealthyHabits = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
 */}

      <section tabIndex="1" className="habits-header">
        <header tabIndex="2" className="habits-header-content">
          <Link to="/home" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="habits-arrow-img"
            />
          </Link>
          <h1 className="h-habits-h1" tabIndex="5">
            Healthy Habits
          </h1>

          <HabitsPopup tabIndex="6" />
        </header>
      </section>

      <Link to="/mood" className="habits-link" tabIndex="7">
        <section tabIndex="8" className="habits-section">
          <img
            src={mood}
            alt="stabilize your mood smiley icon"
            tabIndex="9"
            className="habits-icon"
          />
          <h1 className="habits-h1" tabIndex="10">
            Regulate your Mood
          </h1>
        </section>
      </Link>

      <Link to="/anxiety" className="habits-link" tabIndex="11">
        <section tabIndex="12" className="habits-section">
          <img
            src={anxiety}
            alt="stabilize your mood anxious icon"
            tabIndex="13"
            className="habits-icon"
          />
          <h1 tabIndex="14" className="habits-h1 ">
            Ease Anxiety
          </h1>
        </section>
      </Link>

      <Link to="/socialskills" tabIndex="15" className="habits-link">
        <section tabIndex="16" className="habits-section">
          <img
            src={social}
            alt="stabilize your mood smiley icon"
            tabIndex="17"
            className="habits-icon"
          />
          <h1 tabIndex="18" className="habits-h1-skills">
            Improve your Social Skills
          </h1>
        </section>
      </Link>

      <Navbar tabIndex="19" />
    </>
  );
};
