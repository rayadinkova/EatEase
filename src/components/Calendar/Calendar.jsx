import "../Calendar/Calendar.css";
import { useState } from "react";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = getFirstDayOfMonth(year, month);
    const totalDays = daysInMonth(year, month);

    const weeks = [];
    let days = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-cell"></div>);
    }

    // Populate days in the month
    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <div key={day} className="calendar-day">
          {day}
        </div>
      );

      // Start a new week after reaching the last day of the week
      if ((firstDay + day) % 7 === 0 || day === totalDays) {
        weeks.push(
          <div key={day} className="calendar-week">
            {days}
          </div>
        );
        days = [];
      }
    }
    return weeks;
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={prevMonth}>&lt;</button>
          <h2>
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="calendar-body">{generateCalendar()}</div>
      </div>
    </>
  );
};
