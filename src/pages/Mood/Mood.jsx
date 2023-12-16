import "../Mood/Mood.css";
import { Link } from "react-router-dom";

{
  /* Importing images */
}

import sleep from "../Mood/vectors/sleep.svg";
import backarrow from "../Mood/vectors/backarrow.svg";
import nutrition from "../Mood/vectors/nutrition.svg";
import { Navbar } from "../../components/Navbar/Navbar";

export const Mood = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
-Using proper input types */}

      <section tabIndex="1" className="mood-header">
        <header tabIndex="2" className="mood-header-content">
          <Link to="/healthyhabits" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="mood-arrow-img"
            />
          </Link>
          <h1 className="mood-h1" tabIndex="5">
            Regulate your Mood
          </h1>

          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="mood-content">
        <section tabIndex="7" className="sleep">
          <div className="sleep-title">
            <h2 tabIndex="8" className="mood-h2">
              Get enough sleep
            </h2>
            <img src={sleep} alt="" tabIndex="9" className="sleep-icon" />
          </div>

          <div className="sleep-tips">
            <h3 tabIndex="10" className="mood-h3">
              Maintain a Consistent Sleep Schedule
            </h3>
            <p tabIndex="11" className="mood-p">
              Go to bed and wake up at the same time every day, even on
              weekends. This helps regulate your body internal clock.
            </p>

            <h3 tabIndex="12" className="mood-h3">
              Create a Relaxing Bedtime Routine
            </h3>
            <p tabIndex="13" className="mood-p">
              Develop a calming pre-sleep routine, such as reading a book,
              taking a warm bath, or practicing relaxation exercises. This
              signals to your body that it is time to wind down.
            </p>

            <h3 tabIndex="14" className="mood-h3">
              Optimize Your Sleep Environment
            </h3>
            <p tabIndex="15" className="mood-p">
              Keep your bedroom cool, dark, and quiet. Consider using blackout
              curtains, earplugs, or a white noise machine to minimize
              disruptions.
            </p>

            <h3 tabIndex="16" className="mood-h3">
              Limit Exposure to Screens Before Bed
            </h3>
            <p tabIndex="17" className="mood-p">
              The blue light emitted by phones, tablets, and computers can
              interfere with the production of the sleep hormone melatonin. Try
              to avoid screens at least an hour before bedtime.
            </p>

            <h3 tabIndex="18" className="mood-h3">
              Invest in a Comfortable Mattress and Pillows
            </h3>
            <p tabIndex="19" className="mood-p">
              Choose a mattress and pillows that provide proper support and
              comfort. This can significantly impact the quality of your sleep.
            </p>
          </div>
        </section>

        <section tabIndex="20" className="nutrition">
          <div className="nutrition-title">
            <h2 tabIndex="21" className="mood-h2">
              Mindful nutrition
            </h2>
            <img
              src={nutrition}
              alt=""
              tabIndex="22"
              className="nutrition-icon"
            />
          </div>

          <div className="nutrition-tips">
            <h3 tabIndex="23" className="mood-h3-meals">
              Light meals
            </h3>
            <p tabIndex="24" className="nutrition-p">
              Avoid heavy meals, caffeine, and nicotine close to bedtime, as
              these can disrupt sleep. Opt for a light, healthy snack if you are
              hungry before bedtime.
            </p>
          </div>
        </section>
      </section>

      <Navbar tabIndex="25" />
    </>
  );
};
