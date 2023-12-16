import "../EditDailyLog/EditDailyLog.css";

{
  /* Importing images */
}

import camera from "../AddDailyLog/vectors/camera.svg";
import { InteractiveBar } from "../../../components/InteractiveBar/InteractiveBar";
import { SubmitDailyLog } from "../../../components/Popups/SubmitDailyLog/SubmitDailyLog";
import { CancelLogEdit } from "../../../components/Popups/CancelLogEdit/CancelLogEdit";

export const EditDailyLog = () => {
  return (
    <>
      {/* Accessibility ✨
- Using tab index to support keyboard navigation
- Using alt description for screen readers;
for bacground images I am using an empty alt tag
-Using proper input types */}

      <section tabIndex="1" className="edit-log-header">
        <header tabIndex="2" className="edit-log-header-content">
          <CancelLogEdit tabIndex="3" />
          <h1 tabIndex="4" className="edit-log-h1">
            Edit Daily Log
          </h1>

          <div></div>
        </header>
      </section>

      <div className="hunger-fullness-scale-background">
        <section tabIndex="5" className="edit-log-content">
          <section tabIndex="6" className="hunger-fullness-scale">
            <h2 tabIndex="7" className="edit-log-h2">
              Hunger-Fullness Scale
            </h2>
            <p tabIndex="8" className="edit-log-p">
              Rate your fullness level after you ate the meal
            </p>

            <InteractiveBar />
          </section>
        </section>
      </div>

      <section tabIndex="9" className="edit-daily-log-questions">
        <h3 tabIndex="10" className="edit-log-h3">
          What did you eat and drink?
        </h3>
        <input
          type="text"
          tabIndex="11"
          className="what-did-you-eat-inputfield"
        />

        <section tabIndex="12" className="edit-photo">
          <img
            src={camera}
            alt="current picture of your meal"
            tabIndex="13"
            className="camera-icon"
          />
          <p tabIndex="14" className="change-photo">
            Change photo
          </p>
        </section>

        <h3 tabIndex="15" className="edit-log-h3">
          How much did you eat?
        </h3>
        <section tabIndex="16" className="eaten-quantity-container">
          <button tabIndex="17" className="eaten-quantity">
            Some
          </button>
          <button tabIndex="18" className="eaten-quantity">
            Half
          </button>
          <button tabIndex="19" className="eaten-quantity">
            Most
          </button>
          <button tabIndex="20" className="eaten-quantity">
            All
          </button>
        </section>
        <h3 tabIndex="21" className="edit-log-h3">
          How mindful was this meal?
        </h3>
        <section tabIndex="22" className="meal-mindfulness-container">
          <button tabIndex="23" className="meal-mindfulness">
            Compulsive
          </button>
          <button tabIndex="24" className="meal-mindfulness">
            Distracted
          </button>
          <button tabIndex="25" className="meal-mindfulness">
            Aware
          </button>
          <button tabIndex="26" className="meal-mindfulness">
            Mindful
          </button>
        </section>
        <h3 tabIndex="27" className="edit-log-h3">
          Where did you eat?
        </h3>
        <input
          type="text"
          placeholder="ex. at Home, at a Cafe"
          tabIndex="28"
          className="daily-log-questions-input"
        />
        <h3 tabIndex="29" className="edit-log-h3">
          With whom did you eat?
        </h3>
        <input
          type="text"
          placeholder="ex. Alone, Family, Friends"
          tabIndex="30"
          className="daily-log-questions-input"
        />
        <h3 tabIndex="31" className="edit-log-h3">
          Experienced any other sensations?
        </h3>
        <p tabIndex="32" className="symptoms-p">
          Click “Add Symptoms” to customize your Daily Log based on your
          personal experience
        </p>

        <button tabIndex="33" className="add-symptoms-btn">
          +Add Symptoms
        </button>

        <button tabIndex="34" className="delete-log-btn">
          DELETE
        </button>
      </section>

      <SubmitDailyLog tabIndex="35" />
    </>
  );
};
