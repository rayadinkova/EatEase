import "../MealPicker/MealPicker.css";
import { useState } from "react";

export const MealPicker = () => {
  const [selectedDay, setSelectedDay] = useState("");

  //updating the display of the day depending on the option chosen
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };
  return (
    <section className="mealpicker-container">
      <label htmlFor="mealPicker">Choose a meal type</label>
      <select id="mealPicker" value={selectedDay} onChange={handleDayChange}>
        <option value="">Select meal</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Morning">Morning snack</option>
        <option value="Lunch">Lunch</option>
        <option value="Afternoon">Afternoon snack</option>
        <option value="Dinner">Dinner</option>
        <option value="Evening">Evening snack</option>
      </select>
    </section>
  );
};
