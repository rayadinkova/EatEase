import "../DiscoverFilter/DiscoverFilter.css";
import { useState } from "react";

export const DiscoverFilter = () => {
  {
    /*  Updating the value of the state, depending on the choice of discover category */
  }
  const [activeContent, setActiveContent] = useState("stories");

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <section className="interactive-bar-discover">
        <div className="bar-rows">
          <button
            className="discover-filter-btn"
            onClick={() => handleContentChange("stories")}
          >
            Recovery Stories
          </button>
          <button
            className="discover-filter-btn"
            onClick={() => handleContentChange("digestion")}
          >
            Digestion
          </button>
          <button
            className="discover-filter-btn"
            onClick={() => handleContentChange("sleep")}
          >
            Sleep
          </button>
        </div>

        <div className="bar-rows">
          <button
            className="discover-filter-btn"
            onClick={() => handleContentChange("relationships")}
          >
            Relationships
          </button>
          <button onClick={() => handleContentChange("body-positivity")}>
            Body-positivity
          </button>
        </div>
      </section>

      <section className="discover-videos">
        <h2 className="discover-h2">Videos</h2>
        <div className="content-container">
          {activeContent === "stories" && (
            <div className="discover-filter-div">
              Content for stories goes here (video)
            </div>
          )}
          {activeContent === "digestion" && (
            <div className="discover-filter-div">
              Content for digestion goes here (video)
            </div>
          )}
          {activeContent === "sleep" && (
            <div className="discover-filter-div">
              Content for sleep goes here (video)
            </div>
          )}
          {activeContent === "relationships" && (
            <div className="discover-filter-div">
              Content for relationships goes here (video)
            </div>
          )}
          {activeContent === "body-positivity" && (
            <div className="discover-filter-div">
              Content for body-positivity goes here (video)
            </div>
          )}
        </div>
      </section>

      <section className="discover-podcasts">
        <h2 className="discover-h2">Podcasts</h2>
        <div className="content-container">
          {activeContent === "stories" && (
            <div className="discover-filter-div">
              Content for stories goes here (podcast)
            </div>
          )}
          {activeContent === "digestion" && (
            <div className="discover-filter-div">
              Content for digestion goes here (podcast)
            </div>
          )}
          {activeContent === "sleep" && (
            <div className="discover-filter-div">
              Content for sleep goes here (podcast)
            </div>
          )}
          {activeContent === "relationships" && (
            <div className="discover-filter-div">
              Content for relationships goes here (podcast)
            </div>
          )}
          {activeContent === "body-positivity" && (
            <div className="discover-filter-div">
              Content for body-positivity goes here (podcast)
            </div>
          )}
        </div>
      </section>

      <section className="discover-articles">
        <h2 className="discover-h2">Articles</h2>
        <div className="content-container">
          {activeContent === "stories" && (
            <div className="discover-filter-div-last">
              Content for stories goes here (article)
            </div>
          )}
          {activeContent === "digestion" && (
            <div className="discover-filter-div-last">
              Content for digestion goes here (article)
            </div>
          )}
          {activeContent === "sleep" && (
            <div className="discover-filter-div-last">
              Content for sleep goes here (article)
            </div>
          )}
          {activeContent === "relationships" && (
            <div className="discover-filter-div-last">
              Content for relationships goes here (article)
            </div>
          )}
          {activeContent === "body-positivity" && (
            <div className="discover-filter-div-last">
              Content for body-positivity goes here (article)
            </div>
          )}
        </div>
      </section>
    </>
  );
};
