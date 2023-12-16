import "../SignUp/SignUp.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import backarrow from "../SignUp/vectors/backarrow.svg";

export const SignUp = () => {
  return (
    <>
      {/* Accessibility ✨
  - Using tab index to support keyboard navigation
  - Using alt description for screen readers;
  for bacground images I am using an empty alt tag
  -Using proper input types */}

      <section tabIndex="1" className="sign-up-header">
        <header tabIndex="2" className="sign-up-header-content">
          <Link to="/registration" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="sign-up-arrow-img"
            />
          </Link>
          <h1 tabIndex="5" className="sign-up-h1">
            Create Account
          </h1>
          <div></div>
        </header>
      </section>

      <div className="sign-up-content">
        <div className="sign-up-input-field">
          <form tabIndex="6">
            <input
              type="text"
              placeholder="Name"
              tabIndex="7"
              className="sign-in-password"
            />
          </form>
          <form tabIndex="8">
            <input
              type="text"
              placeholder="Age"
              tabIndex="9"
              className="sign-in-password"
            />
          </form>
          <form tabIndex="10">
            <input
              type="email"
              placeholder="Email"
              tabIndex="11"
              className="sign-up-email"
            />
          </form>
          <form tabIndex="12">
            <input
              type="text"
              placeholder="Password"
              tabIndex="13"
              className="sign-in-password"
            />
          </form>
          <form tabIndex="14">
            <input
              type="text"
              placeholder="Confirm Password"
              tabIndex="15"
              className="sign-in-password"
            />
          </form>
        </div>

        <h2 tabIndex="16" className="sign-up-h3">
          By clicking Create Account, you agree to our Terms aof Use and Privacy
          Policy.
        </h2>

        <div className="consent">
          <h3 tabIndex="17">
            <Link to="/privacypolicy" className="sign-in-privacy">
              Privacy Policy
            </Link>
          </h3>
          <h3 tabIndex="18">
            <Link to="/termsofuse" className="sign-in-terms">
              Terms of Use
            </Link>
          </h3>
        </div>

        <button tabIndex="19" className="sign-up-page-btn">
          <Link to="/home" tabIndex="20" className="sign-up-page-link">
            Create Account
          </Link>
        </button>
      </div>
    </>
  );
};
