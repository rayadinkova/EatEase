import "../ProfessionalHelp/ProfessionalHelp.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import professionalhelpicon from "../ProfessionalHelp/vectors/professionalhelpicon.svg";
import prevarrow from "../ProfessionalHelp/vectors/prevarrow.svg";
import nextarrow from "../ProfessionalHelp/vectors/nextarrow.svg";

export const ProfessionalHelp = () => {
  return (
    <div>
      <div>
        <h1 tabIndex="1" className="pro-help-skip">
          Skip
        </h1>

        <section tabIndex="2" className="pro-help-onboarding">
          <img
            src={professionalhelpicon}
            alt=""
            tabIndex="3"
            className="professionalhelpicon"
          />
          <div className="pro-help-onboarding-container">
            <h1 tabIndex="4" className="pro-help-h1">
              Affordable Professional help
            </h1>
            <h2 tabIndex="5" className="pro-help-h2">
              Explore valuable piece of advice by certified healthcare
              professionals, in a free and easily digestible form like podcasts,
              videos, articles and more.
            </h2>

            <div className="pro-help-cta">
              <button tabIndex="6" className="pro-help-prev-btn">
                <img
                  src={prevarrow}
                  alt="arrow leading to previous screen"
                  tabIndex="7"
                />
                <Link
                  to="/buildhealthyhabits"
                  className="pro-help-prev-link"
                  tabIndex="8"
                >
                  Prev
                </Link>
              </button>

              <button className="pro-help-next-btn" tabIndex="9">
                <Link
                  to="/registration"
                  className="pro-help-prev-link"
                  tabIndex="10"
                >
                  Next
                </Link>
                <img
                  src={nextarrow}
                  alt="arrow leading to next screen"
                  tabIndex="11"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
