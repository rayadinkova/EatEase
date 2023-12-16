import "../Registration/Registration.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import logo from "../Registration/vectors/logo.svg";

export const Registration = () => {
  return (
    <section tabIndex="1" className="registration">
      {/* Accessibility ✨
      - Using tab index to support keyboard navigation
      - Using alt description for screen readers;
      for background images I am using an empty alt tag */}

      <div className="registration-graphics">
        <Link to="/welcomeEatEase" tabIndex="2">
          <img src={logo} alt="vector icon of the apps logo" tabIndex="3" />
        </Link>

        <h1 tabIndex="4" className="registration-h1">
          <Link to="/welcomeEatEase" className="splash-h1" tabIndex="5">
            EatEase
          </Link>
        </h1>
      </div>

      <button tabIndex="6" className="sign-in-btn">
        <Link to="/signin" tabIndex="7" className="sign-in-link">
          Sign In
        </Link>
      </button>

      <button tabIndex="8" className="sign-up-btn">
        <Link to="/signup" tabIndex="9" className="sign-up-link">
          Create Account
        </Link>
      </button>
    </section>
  );
};
