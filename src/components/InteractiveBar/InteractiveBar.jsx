import "../InteractiveBar/InteractiveBar.css";
import { useState } from "react";

export const InteractiveBar = () => {
  {
    /*  Updating the value of the state, depending on the choice of fullness level */
  }
  const [activeContent, setActiveContent] = useState("neutral");

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <section className="interactive-bar">
        <div className="bar-rows">
          <button onClick={() => handleContentChange("satisfied")}>
            Satisfied
          </button>
          <button onClick={() => handleContentChange("full")}>Full</button>
          <button onClick={() => handleContentChange("stuffed")}>
            Stuffed
          </button>
          <button onClick={() => handleContentChange("stuffed")}>Sick</button>
        </div>

        <div className="bar-rows">
          <button onClick={() => handleContentChange("neutral")}>
            Neutral
          </button>
          <button
            className="littlehungry"
            onClick={() => handleContentChange("littlehungry")}
          >
            Little hungry
          </button>
          <button
            className="littlehungry"
            onClick={() => handleContentChange("prettyhungry")}
          >
            Pretty hungry
          </button>
        </div>
      </section>

      <section className="content-container">
        {activeContent === "sick" && (
          <div className="scale-div">
            <h1 className="scale-h1">Sick</h1>
            <p className="scale-p">
              You likely do not want to move or do anything
            </p>
          </div>
        )}
        {activeContent === "stuffed" && (
          <div className="scale-div">
            <h1 className="scale-h1">Stuffed</h1>
            <p className="scale-p">
              You can feel pressure on your stomach or your stomach in general
              hurts
            </p>
          </div>
        )}
        {activeContent === "full" && (
          <div className="scale-div">
            <h1 className="scale-h1">Full</h1>

            <p className="scale-p">
              You feel vry full and likely ate more than needed
            </p>
          </div>
        )}
        {activeContent === "satisfied" && (
          <div className="scale-div">
            <h1 className="scale-h1">Satisfied</h1>
            <p className="scale-p">
              You are comfortable and could probably go 3-4 hours without eating
              again
            </p>
          </div>
        )}
        {activeContent === "neutral" && (
          <div className="scale-div">
            <h1 className="scale-h1">Neutral</h1>
            <p className="scale-p">
              You are neither hungry nor full - sometimes we eat at this point
              when we are bored
            </p>
          </div>
        )}
        {activeContent === "littlehungry" && (
          <div className="scale-div">
            <h1 className="scale-h1">Little hungry</h1>
            <p className="scale-p">
              You could comfortable go an hour without food
            </p>
          </div>
        )}
        {activeContent === "prettyhungry" && (
          <div className="scale-div">
            <h1 className="scale-h1">Pretty hungry</h1>
            <p className="scale-p">
              Your stomach is growling a little You can still make conscious
              choices and wait for food
            </p>
          </div>
        )}
      </section>
    </>
  );
};
