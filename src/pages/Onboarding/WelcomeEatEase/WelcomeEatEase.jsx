import "../WelcomeEatEase/welcomeEatEase.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import logo from "../WelcomeEatEase/vectors/logo.svg";
import heart from "../WelcomeEatEase/vectors/heart.svg";
import nextarrow from "../WelcomeEatEase/vectors/nextarrow.svg";

export const WelcomeEatEase = () => {
  return (
    <>
      {/* Accessibility ✨
      - Using tab index to support keyboard navigation
      - Using alt description for screen readers;
      for background images I am using an empty alt tag */}

      <section tabIndex="1" className="welcome-onboarding">
        <img
          src={logo}
          alt="vector icon of the apps logo"
          tabIndex="2"
          className="logo-onboarding"
        />
        <div className="welcome-onboarding-container">
          <h1 tabIndex="3" className="welcome-onboarding-h1">
            Welcome to EatEase
          </h1>
          <h2 tabIndex="4" className="welcome-onboarding-h2">
            A free accessible resource to successfully assist you in your eating
            disorder recovery process.
          </h2>
          <h2 tabIndex="5" className="welcome-onboarding-h2">
            We believe you deserve the best. Our aim is to make you believe that
            about yourself too.
          </h2>

          <img
            src={heart}
            alt="white heart icon"
            tabIndex="6"
            className="heart"
          />

          <button tabIndex="7" className="welcome-onboarding-btn">
            <Link
              to="/awareness"
              tabIndex="8"
              className="welcome-onboarding-link"
            >
              Next
            </Link>
            <img
              src={nextarrow}
              tabIndex="9"
              alt="arrow leading to next screen"
            />
          </button>
        </div>
      </section>
    </>
  );
};
