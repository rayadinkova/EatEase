import "../LogSummary/LogSummary.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import backarrow from "../AddDailyLog/vectors/backarrow.svg";
import { Calendar } from "../../../components/Calendar/Calendar";
import nextarrow from "../LogSummary/vectors/nextarrow-blue.svg";

export const LogSummary = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
*/}
      <section tabIndex="1" className="log-summary-header">
        <header tabIndex="2" className="log-summary-header-content">
          <Link to="/home" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="add-log-arrow-img"
            />
          </Link>
          <h1 tabIndex="5" className="log-summary-h1">
            Daily Log Summary
          </h1>

          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="log-summary-content">
        <section tabIndex="7" className="log-summary-calendar">
          <h2 tabIndex="8" className="log-summary-h2">
            Monthly overview
          </h2>
        </section>

        <Calendar tabIndex="9" />

        <section tabIndex="10" className="logs">
          <section tabIndex="11" className="log-date">
            <h2 tabIndex="12" className="logs-h2">
              Monday, 4 December 2023
            </h2>
          </section>

          <Link to="/editlog" tabIndex="13" className="log-details-link">
            <section tabIndex="14" className="log-details">
              <h2 tabIndex="15" className="log-details-h2">
                Breakfast
              </h2>
              <img
                src={nextarrow}
                alt="edit your daily log"
                tabIndex="16"
                className="edit-log-arrow"
              />
            </section>
          </Link>

          <section tabIndex="17" className="log-details">
            <h2 tabIndex="18" className="log-details-h2">
              Lunch
            </h2>
            <img
              src={nextarrow}
              alt="edit your daily log"
              tabIndex="19"
              className="edit-log-arrow"
            />
          </section>

          <section tabIndex="20" className="log-details">
            <h2 tabIndex="21" className="log-details-h2">
              Dinner
            </h2>
            <img
              src={nextarrow}
              alt="edit your daily log"
              tabIndex="22"
              className="edit-log-arrow"
            />
          </section>

          <section tabIndex="23" className="log-details">
            <h2 tabIndex="24" className="log-details-h2">
              Evening Snack
            </h2>
            <img
              src={nextarrow}
              alt="edit your daily log"
              tabIndex="25"
              className="edit-log-arrow"
            />
          </section>
        </section>
      </section>
    </>
  );
};
