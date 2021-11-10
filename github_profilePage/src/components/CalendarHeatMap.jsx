import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../utils/styles.css";

const CalendarHeatMap = ({ value, year }) => {
  return (
    <>
      <CalendarHeatmap
        endDate={new Date(`${year}-12-31`)}
        startDate={new Date(`${year}-01-01`)}
        values={value}
        showWeekdayLabels={true}
        showOutOfRangeDays={true}
        gutterSize={5}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
    </>
  );
};

export default CalendarHeatMap;
