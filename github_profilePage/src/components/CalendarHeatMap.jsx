import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import "../utils/styles.css";

const CalendarHeatMap = ({ value, year }) => {
  return (
    <>
      <CalendarHeatmap
        endDate={new Date(`${year}-12-31`)}
        startDate={new Date(`${year}-01-01`)}
        values={value}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${
              value?.count > 1
                ? `${value?.count} contributions`
                : `${value?.count} contribution`
            } on ${value?.date}`,
          };
        }}
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
      <ReactTooltip />
    </>
  );
};

export default CalendarHeatMap;
