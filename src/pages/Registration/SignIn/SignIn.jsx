import { Link } from "react-router-dom";
import "../SignIn/SignIn.css";

{
  /* Importing images */
}

import backarrow from "../SignIn/vectors/backarrow.svg";

export const SignIn = () => {
  return (
    <>
      {/* Accessibility ✨
      - Using tab index to support keyboard navigation
      - Using alt description for screen readers;
      for bacground images I am using an empty alt tag
      -Using proper input types */}

      <section tabIndex="1" className="sign-in-header">
        <header tabIndex="2" className="sign-in-header-content">
          <Link to="/registration" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="sign-in-arrow-img"
            />
          </Link>
          <h1 className="sign-in-h1" tabIndex="5">
            Sign In
          </h1>
          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="sign-in-content">
        <div className="sign-in-input-field">
          <form tabIndex="7">
            <input
              type="email"
              placeholder="Email"
              tabIndex="8"
              className="sign-in-email"
            />
          </form>
          <form tabIndex="9">
            <input
              type="text"
              placeholder="Password"
              tabIndex="10"
              className="sign-in-password"
            />
          </form>
        </div>

        <h2 tabIndex="11" className="sign-in-h2">
          Forgot password?
        </h2>

        <button tabIndex="12" className="sign-in-page-btn">
          <Link to="/registration" tabIndex="13" className="sign-in-page-link">
            Sign In
          </Link>
        </button>
      </section>
    </>
  );
};
