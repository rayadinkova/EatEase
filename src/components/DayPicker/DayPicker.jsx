import "../DayPicker/DayPicker.css";
import { useState } from "react";

export const DayPicker = () => {
  const [selectedDay, setSelectedDay] = useState("");

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };
  return (
    <section className="daypicker-container">
      <label htmlFor="dayPicker">Choose a week day</label>
      <select id="dayPicker" value={selectedDay} onChange={handleDayChange}>
        <option value="">Select day</option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
    </section>
  );
};
