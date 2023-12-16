import "../CopingCardsFilter/CopingCardsFilter.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export const CopingCardsFilter = () => {
  {
    /*  Updating the value of the state, depending on the choice of card category */
  }
  const [activeCard, setActiveCard] = useState("self-talk");

  const handleCardChange = (event) => {
    setActiveCard(event.target.value);
  };

  return (
    <>
      <section className="card-content-container">
        {activeCard === "self-talk" && (
          <section className="coping-cards-affirmation-container">
            <h1 className="coping-cards-affirmation-h1">
              I am more than the shape and size of my body. My worth is not
              determined by my appearance. I am deserving of love, care, and
              nourishment.
            </h1>
          </section>
        )}
        {activeCard === "self-isolation" && (
          <section className="coping-cards-affirmation-container">
            <h1 className="coping-cards-affirmation-h1">
              I am worthy of love and connection. I am not alone, and it is okay
              to share my struggles and victories with others.
            </h1>
          </section>
        )}
        {activeCard === "restrict" && (
          <section className="coping-cards-affirmation-container">
            <h1 className="coping-cards-affirmation-h1">
              I release restrictive thoughts and embrace a healthy, balanced
              approach to nourishing my body and mind.
            </h1>
          </section>
        )}
        {activeCard === "binge" && (
          <section className="coping-cards-affirmation-container">
            <h1 className="coping-cards-affirmation-h1">
              I am in control of my choices. I nourish my body with love and
              respect, so I choose to listen to my body and treat it with
              kindness.
            </h1>
          </section>
        )}
        {activeCard === "thoughts" && (
          <section className="coping-cards-affirmation-container">
            <h1 className="coping-cards-affirmation-h1">
              I am in control of my thoughts and actions, so choose to nourish
              my body with kindness and respect. I am strong, resilient, and on
              a path to healing.
            </h1>
          </section>
        )}
        {activeCard === "self-harm" && (
          <section className="coping-cards-affirmation-container">
            <h1 className="coping-cards-affirmation-h1">
              I am more than my struggles, and I am worthy of a healthy and
              vibrant life. Today, I choose self-love and self-care.
            </h1>
          </section>
        )}
      </section>

      <section className="coping-cards-filter">
        <label className="cards-radio-btn">
          <input
            type="radio"
            value="self-talk"
            checked={activeCard === "self-talk"}
            onChange={handleCardChange}
            className="cards-input"
          />
          Negative self-talk
        </label>

        <label className="cards-radio-btn">
          <input
            type="radio"
            value="self-isolation"
            checked={activeCard === "self-isolation"}
            onChange={handleCardChange}
            className="cards-input"
          />
          Self-isolation
        </label>

        <label className="cards-radio-btn">
          <input
            type="radio"
            value="restrict"
            checked={activeCard === "restrict"}
            onChange={handleCardChange}
            className="cards-input"
          />
          Restrictive urges
        </label>

        <label className="cards-radio-btn">
          <input
            type="radio"
            value="binge"
            checked={activeCard === "binge"}
            onChange={handleCardChange}
            className="cards-input"
          />
          Binge urges
        </label>

        <label className="cards-radio-btn">
          <input
            type="radio"
            value="thoughts"
            checked={activeCard === "thoughts"}
            onChange={handleCardChange}
            className="cards-input"
          />
          Intrusive thoughts
        </label>

        <label className="cards-radio-btn">
          <input
            type="radio"
            value="self-harm"
            checked={activeCard === "self-harm"}
            onChange={handleCardChange}
            className="cards-input"
          />
          Self-harm
        </label>

        <section className="custom-card-container">
          <FaPlus className="custom-plus" />
          <h1 className="custom-h1">Custom</h1>
        </section>
      </section>
    </>
  );
};
