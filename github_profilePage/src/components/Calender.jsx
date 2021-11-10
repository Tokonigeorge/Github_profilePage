import { SVGGraph, CanvasGraph, StrGraph } from "calendar-graph";

const data = [
  { date: "2016-01-01", count: 1 },
  { date: "2016-01-03", count: 4 },
  { date: "2016-01-06", count: 2 },
  // ...and so on
];

new SVGGraph("#svg-root", data, {
  startDate: new Date("2016-01-01"),
  endDate: new Date("2016-04-01"),
  colorFun: (v) => {
    return "#d6e685";
  },
});

new CanvasGraph("#canvas-root", data, {
  startDate: new Date("2016-01-01"),
  endDate: new Date("2016-04-01"),
  colorFun: (v) => {
    return "#d6e685";
  },
});

export const Strgraph = new StrGraph(data, {
  startDate: new Date("2016-01-01"),
  endDate: new Date("2016-04-01"),
  colorFun: (v) => {
    return "#d6e685";
  },
});
// this.body = strGraph.render();
