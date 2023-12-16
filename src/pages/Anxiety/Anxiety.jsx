import "../Anxiety/Anxiety.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

{
  /* Importing images */
}

import backarrow from "../Mood/vectors/backarrow.svg";

export const Anxiety = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
-Using proper input types */}

      <section tabIndex="1" className="anxiety-header">
        <header tabIndex="2" className="anxiety-header-content">
          <Link to="/healthyhabits" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="2"
              className="anxiety-arrow-img"
            />
          </Link>
          <h1 className="anxiety-h1" tabIndex="4">
            Ease Anxiety
          </h1>

          <div></div>
        </header>
      </section>

      <section tabIndex="5" className="anxiety-content">
        <h2 tabIndex="6" className="anxiety-h2">
          Deep Breathing and Mindfulness
        </h2>
        <p tabIndex="7" className="anxiety-p">
          Practice deep breathing exercises to calm the nervous system.
        </p>
        <p tabIndex="8" className="anxiety-p">
          Try mindfulness meditation to stay focused on the present moment.
        </p>

        <h2 tabIndex="9" className="anxiety-h2">
          Regular Exercise
        </h2>
        <p tabIndex="10" className="anxiety-p">
          Engage in regular physical activity, as exercise is known to reduce
          anxiety and improve mood.
        </p>

        <h2 tabIndex="11" className="anxiety-h2">
          Healthy Lifestyle
        </h2>
        <p tabIndex="12" className="anxiety-p">
          Maintain a balanced diet, ensuring you get the necessary nutrients.
        </p>
        <p tabIndex="13" className="anxiety-p">
          Prioritize regular and sufficient sleep.
        </p>

        <h2 tabIndex="14" className="anxiety-h2">
          Limit Stimulants
        </h2>
        <p tabIndex="15" className="anxiety-p">
          Reduce or eliminate the intake of stimulants like caffeine, as they
          can exacerbate anxiety symptoms.
        </p>

        <h2 tabIndex="16" className="anxiety-h2">
          Stay Connected
        </h2>
        <p tabIndex="17" className="anxiety-p">
          Maintain social connections and talk to friends or family about your
          feelings.
        </p>

        <h2 tabIndex="18" className="anxiety-h2">
          Establish a Routine
        </h2>
        <p tabIndex="19" className="anxiety-p">
          Create a daily routine to provide structure and predictability.
        </p>

        <h2 tabIndex="20" className="anxiety-h2">
          Limit Media Consumption
        </h2>
        <p tabIndex="21" className="anxiety-p">
          Create a daily routine to provide structure and predictability.
        </p>

        <h2 tabIndex="22" className="anxiety-h2">
          Journaling
        </h2>
        <p tabIndex="23" className="anxiety-p">
          Write down your thoughts and feelings to gain perspective and identify
          patterns.
        </p>

        <h2 tabIndex="24" className="anxiety-h2">
          Hobbies
        </h2>
        <p tabIndex="25" className="anxiety-p-last">
          Engage in activities you enjoy, such as reading, art, or listening to
          music.
        </p>
      </section>

      <Navbar tabIndex="26" />
    </>
  );
};
