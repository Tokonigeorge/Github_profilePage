import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../utils/styles.css";

const CalendarHeatMap = () => {
  const values = [
    { date: "2020-01-01", count: 4 },
    { date: "2020-01-22", count: 1 },
    { date: "2020-01-30", count: 3 },
    { date: "2020-02-20", count: 4 },
    { date: "2020-03-01", count: 4 },
    { date: "2020-03-22", count: 1 },
    { date: "2020-03-30", count: 3 },
    { date: "2020-03-20", count: 4 },
  ];
  return (
    <>
      <CalendarHeatmap
        endDate={new Date("2021-01-01")}
        startDate={new Date("2020-01-01")}
        values={values}
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
