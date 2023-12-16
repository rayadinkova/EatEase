import "../SocialSkills/SocialSkills.css";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

{
  /* Importing images */
}

import backarrow from "../Mood/vectors/backarrow.svg";

export const SocialSkills = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
*/}

      <section tabIndex="1" className="social-header">
        <header tabIndex="2" className="social-header-content">
          <Link to="/healthyhabits" tabIndex="3">
            <img
              src={backarrow}
              alt="arrow that takes you on the previous page"
              tabIndex="4"
              className="social-arrow-img"
            />
          </Link>
          <h1 className="social-h1" tabIndex="5">
            Improve your Social Skills
          </h1>

          <div></div>
        </header>
      </section>

      <section tabIndex="6" className="social-content">
        <h2 tabIndex="7" className="social-h2">
          Active Listening
        </h2>
        <p tabIndex="8" className="social-p">
          Pay close attention to what others are saying.
        </p>
        <p tabIndex="9" className="social-p">
          Show that you are engaged by nodding, making eye contact, and
          providing verbal affirmations.
        </p>

        <h2 tabIndex="10" className="social-h2">
          Maintain Eye Contact
        </h2>
        <p tabIndex="11" className="social-p">
          Establishing and maintaining eye contact demonstrates confidence and
          interest in the conversation.
        </p>

        <h2 tabIndex="12" className="social-h2">
          {" "}
          Body Language
        </h2>
        <p tabIndex="13" className="social-p">
          Be mindful of your body language. Open and relaxed postures convey
          approachability.
        </p>
        <p tabIndex="14" className="social-p">
          Avoid crossing your arms, as it may signal defensiveness.
        </p>

        <h2 tabIndex="15" className="social-h2">
          Empathy
        </h2>
        <p tabIndex="16" className="social-p">
          Put yourself in others shoes to understand their perspective.
        </p>
        <p tabIndex="17" className="social-p">
          Respond with compassion and understanding.
        </p>

        <h2 tabIndex="18" className="social-h2">
          Ask Questions
        </h2>
        <p tabIndex="19" className="social-p">
          Show genuine interest in others by asking open-ended questions. This
          keeps the conversation flowing and demonstrates your curiosity.
        </p>

        <h2 tabIndex="20" className="social-h2">
          Small Talk
        </h2>
        <p tabIndex="21" className="social-p">
          Practice initiating and participating in small talk. Topics can
          include current events, shared experiences, or common interests.
        </p>

        <h2 tabIndex="22" className="social-h2">
          Mindfulness
        </h2>
        <p tabIndex="23" className="social-p">
          Stay present in the moment during conversations and minimize
          distractions and focus on the person you are interacting with.
        </p>

        <h2 tabIndex="24" className="social-h2">
          Join Social Groups
        </h2>
        <p tabIndex="25" className="social-p">
          Engage in activities or groups related to your interests. This
          provides natural opportunities to practice socializing.
        </p>

        <h2 tabIndex="26" className="social-h2">
          Self-Reflection
        </h2>
        <p tabIndex="27" className="social-p-last">
          Regularly assess your social interactions. Identify areas for
          improvement and celebrate successes.
        </p>
      </section>

      <Navbar tabIndex="28" />
    </>
  );
};
