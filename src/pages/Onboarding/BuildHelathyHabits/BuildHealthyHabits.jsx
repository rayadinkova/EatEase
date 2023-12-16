import "../BuildHelathyHabits/BuildHealthyHabits.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import buildhealthyhabitsicon from "../BuildHelathyHabits/vectors/buildinghealthyhabitsicon.svg";
import prevarrow from "../BuildHelathyHabits/vectors/prevarrow.svg";
import nextarrow from "../BuildHelathyHabits/vectors/nextarrow.svg";

export const BuildHealthyHabits = () => {
  return (
    <div>
      {/* Accessibility ✨
      - Using tab index to support keyboard navigation
      - Using alt description for screen readers;
      for background images I am using an empty alt tag */}

      <h1 tabIndex="1">
        <Link
          to="/registration"
          tabIndex="2"
          className="buildhealthyhabits-skip"
        >
          Skip
        </Link>
      </h1>

      <section tabIndex="3" className="build-healthy-habits-onboarding">
        <img
          src={buildhealthyhabitsicon}
          alt=""
          tabIndex="4"
          className="buildhealthyhabitsicon"
        />
        <div className="build-healthy-habits-onboarding-container">
          <h1 tabIndex="5" className="build-healthy-habits-h1">
            Build Healthy Habits
          </h1>
          <h2 tabIndex="6" className="build-healthy-habits-h2">
            Set personal goals and keep track of your progress in an easy and
            fun way, all while staying consistent.
          </h2>

          <div className="build-healthy-habits-cta">
            <button tabIndex="7" className="build-healthy-habits-prev-btn">
              <img
                src={prevarrow}
                alt="arrow leading to previous screen"
                tabIndex="8"
              />
              <Link
                to="/awareness"
                className="build-healthy-habits-prev-link"
                tabIndex="9"
              >
                Prev
              </Link>
            </button>

            <button className="build-healthy-habits-next-btn" tabIndex="10">
              <Link
                to="/professionalhelp"
                className="build-healthy-habits-prev-link"
                tabIndex="11"
              >
                Next
              </Link>
              <img
                src={nextarrow}
                alt="arrow leading to next screen"
                tabIndex="12"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
