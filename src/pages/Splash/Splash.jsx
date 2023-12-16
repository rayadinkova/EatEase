import "../Splash/Splash.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import logo from "../Splash/vectors/logo.svg";
import background from "../Splash/vectors/background-graphics.svg";

export const Splash = () => {
  return (
    <>
      {/* Accessibility ✨
      - Using tab index to support keyboard navigation
      - Using alt description for screen readers;
      for bacground images I am using an empty alt tag */}

      <section tabIndex="1" className="splash">
        <div className="splash-graphics">
          <img
            src={background}
            alt=""
            tabIndex="2"
            className="background-graphics"
          />
          <Link to="/welcomeEatEase" tabIndex="3">
            <img src={logo} alt="vector icon of the apps logo" tabIndex="4" />
          </Link>

          <h1 tabIndex="5">
            <Link to="/welcomeEatEase" className="splash-h1" tabIndex="6">
              EatEase
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
};
