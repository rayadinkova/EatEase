import "../ToggleButton/ToggleButton.css";
import { useState } from "react";

export const ToggleButton = () => {
  const [isToggled, setToggled] = useState("");

  //turn on/off reminders
  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <button onClick={handleToggle} className="toggle-btn">
        {isToggled ? "Turn On" : "Turn Off"}
      </button>
    </>
  );
};
