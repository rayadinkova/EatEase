import "../SelfAwareness/SelfAwareness.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import selfawarenessicon from "../SelfAwareness/vectors/selfawareness.svg";
import prevarrow from "../SelfAwareness/vectors/prevarrow.svg";
import nextarrow from "../SelfAwareness/vectors/nextarrow.svg";

export const SelfAwareness = () => {
  return (
    <>
      {/* Accessibility ✨
      - Using tab index to support keyboard navigation
      - Using alt description for screen readers;
      for background images I am using an empty alt tag */}

      <h1 tabIndex="1">
        <Link to="/registration" tabIndex="2" className="skip">
          Skip
        </Link>
      </h1>

      <section tabIndex="3" className="self-awareness-onboarding">
        <img
          src={selfawarenessicon}
          alt=""
          tabIndex="4"
          className="selfawarenessicon"
        />
        <div className="self-awareness-onboarding-container">
          <h1 tabIndex="5" className="self-awareness-h1">
            Self-awareness
          </h1>
          <h2 tabIndex="6" className="self-awareness-h2">
            Learn how to identify triggers and understand your emotions better,
            and inevitably become more confident in your journey to recovery.
          </h2>

          <div className="self-awareness-cta">
            <button className="self-awareness-prev-btn" tabIndex="7">
              <img
                src={prevarrow}
                alt="arrow leading to previous screen"
                tabIndex="8"
              />
              <Link
                to="/welcomeEatEase"
                tabIndex="9"
                className="self-awareness-prev-link"
              >
                Prev
              </Link>
            </button>

            <button tabIndex="10" className="self-awareness-next-btn">
              <Link
                to="/buildhealthyhabits"
                tabIndex="11"
                className="self-awareness-prev-link"
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
    </>
  );
};
