import "../Home/Home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

{
  /* Importing images */
}

import healthyhabits from "../Home/vectors/healthyhabits.svg";
import copingcards from "../Home/vectors/copingcards.svg";
import goals from "../Home/vectors/goals.svg";
import reasons from "../Home/vectors/reasons.svg";
import log from "../Home/vectors/log.svg";
import { DayPicker } from "../../components/DayPicker/DayPicker";
import { MealPicker } from "../../components/MealPicker/MealPicker";

export const Home = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
 */}

      <h1 tabIndex="1" className="home-h1">
        Hi, Raya
      </h1>

      <section tabIndex="2" className="daily-log-section">
        <div className="daily-log-title">
          <img
            src={log}
            alt="daily log journal icon"
            tabIndex="3"
            className="daily-log-icon"
          />
          <h2 tabIndex="4" className="daily-log-h2">
            Daily Log
          </h2>
        </div>
        <p tabIndex="5" className="home-p">
          Use the Daily Log tool to log your meals and track your progress.
        </p>

        <div className="daily-log-div">
          <section tabIndex="6" className="daily-log-container">
            <h2 tabIndex="7" className="what-did-you-eat">
              What did you eat today?
            </h2>
            <DayPicker tabIndex="8" />
            <MealPicker tabIndex="9" />
            <Link to="/addlog" tabIndex="10" className="home-submit-link">
              <button tabIndex="11" className="home-submit-btn">
                Submit
              </button>
            </Link>
          </section>

          <Link
            to="/logsummary"
            tabIndex="12"
            className="daily-log-summary-link"
          >
            <h2 tabIndex="13" className="daily-log-summary">
              View Daily Log Summary
            </h2>
          </Link>
        </div>
      </section>

      <section tabIndex="14" className="home-journal">
        <div className="wellness-journal">
          <h2 tabIndex="15" className="home-h2">
            Your Wellness Journal
          </h2>

          <p tabIndex="16" className="learn-more-p">
            <Link tabIndex="17" className="learn-more-link">
              Learn more
            </Link>
          </p>
        </div>

        <p tabIndex="18" className="home-p">
          Connect with yourself, write down your thoughts, set goals, or do a
          self-reflection. The Journal will help you to identify triggers and
          better understand your emotions.
        </p>
      </section>

      <section tabIndex="19" className="home-tools">
        <h2 tabIndex="20" className="home-h2">
          Tools
        </h2>
        <p tabIndex="21" className="home-p">
          The self-help tools provided by the app, are intended to help you on
          your recovery journey by various psychologically proven methods.
        </p>
      </section>

      <div className="tools-row-1">
        <section tabIndex="22">
          <div className="tools-cta">
            <Link to="/healthyhabits" tabIndex="23">
              <img
                src={healthyhabits}
                alt="link to healthy habits"
                tabIndex="24"
              />
            </Link>

            <h3 className="home-h3" tabIndex="25">
              Healthy Habits
            </h3>
          </div>
        </section>

        <section tabIndex="26">
          <div className="tools-cta">
            <Link to="/copingcards" tabIndex="27">
              <img src={copingcards} alt="link to coping cards" tabIndex="28" />
            </Link>

            <h3 className="home-h3" tabIndex="29">
              Coping Cards
            </h3>
          </div>
        </section>
      </div>

      <div className="tools-row-2">
        <section tabIndex="30">
          <div className="tools-cta">
            <Link to="/goals" tabIndex="31">
              <img src={goals} alt="link to goals" tabIndex="32" />
            </Link>

            <h3 className="home-h3" tabIndex="33">
              Goals
            </h3>
          </div>
        </section>

        <section tabIndex="34">
          <div className="tools-cta">
            <Link tabIndex="35">
              <img
                src={reasons}
                alt="link to reasons to recover"
                tabIndex="36"
              />
            </Link>

            <h3 tabIndex="37" className="home-h3-resons">
              Reasons to recover
            </h3>
          </div>
        </section>
      </div>

      <section tabIndex="38" className="home-discover">
        <div className="discover">
          <h2 tabIndex="39" className="home-h2">
            Discover
          </h2>
          <p tabIndex="40" className="learn-more-p">
            <Link tabIndex="41" className="learn-more-link">
              Learn more
            </Link>
          </p>
        </div>

        <p className="discover-p" tabIndex="42">
          Get certified knowledge about the intricate biological functions of
          your body, to help cultivate awareness and appreciation for what it
          is. Because you are so much more than what you can see in the mirror.
        </p>
      </section>

      <Navbar tabIndex="43" />
    </>
  );
};
