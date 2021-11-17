import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";
import "../utils/styles.css";
import { getMonth, getDay } from "../date";

const CalendarHeatMap = ({ value, year, from, to }) => {
  const colorScale = (count) => {
    if (count === 0) {
      return 0;
    } else if (count > 10) return 4;
    else if (count >= 7 && count < 10) return 3;
    else if (count >= 4 && count < 7) return 2;
    else {
      return 1;
    }
  };
  return (
    <>
      <CalendarHeatmap
        endDate={new Date(`${year}-${to}-31`)}
        startDate={new Date(`${year}-${from}-01`)}
        values={value}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${
              value?.count > 1
                ? `${value?.count} contributions`
                : `${value?.count} contribution`
            } on ${getDay(value?.date)} ${getMonth(value?.date, "short")}`,
          };
        }}
        showWeekdayLabels={true}
        showOutOfRangeDays={true}
        gutterSize={5}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${colorScale(value.count)}`;
        }}
      />
      <ReactTooltip />
    </>
  );
};

export default CalendarHeatMap;
