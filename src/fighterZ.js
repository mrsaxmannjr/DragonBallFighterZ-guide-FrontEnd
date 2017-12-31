var data = [
  {
    className: "Goku", // optional can be used for styling
    axes: [
      {axis: "Power", value: 4},
      {axis: "Speed", value: 2},
      {axis: "Technique", value: 3},
      {axis: "Reach", value: 3},
      {axis: "Energy", value: 3}
    ]
  },
  // {
  //   className: "Vegeta",
  //   axes: [
  //     {axis: "Power", value: 3},
  //     {axis: "Speed", value: 3},
  //     {axis: "Technique", value: 2},
  //     {axis: "Reach", value: 3},
  //     {axis: "Energy", value: 4}
  //   ]
  // }
];

var stats = [
  {
    name: "Goku",
    Power: 4,
    Speed: 2,
    Technique: 3,
    Reach: 3,
    Energy: 3,
    StatTotal: 15,
    "Ease of use": "SS",
    StatImg: "/Assets/Character-Statsheets/gokuStats.png"
  },
  {
    name: "Vegeta",
    Power: 3,
    Speed: 3,
    Technique: 2,
    Reach: 3,
    Energy: 4,
    StatTotal: 15,
    "Ease of use": "SS",
    StatImg: "/Assets/Character-Statsheets/vegetaStats.png"
  }
];

// RadarChart.defaultConfig.color = function() {};
// RadarChart.defaultConfig.radius = 3;
// RadarChart.defaultConfig.w = 400;
// RadarChart.defaultConfig.h = 400;
// Math.ceil(Math.random() * 6)
// RadarChart.draw(".chart-container", data);

function randomDataset() {
  return data.map(function(d) {
    return {
      className: d.className,
      axes: d.axes.map(function(axis) {
        return {axis: axis.axis, value: axis.value};
      })
    };
  });
}

var chart = RadarChart.chart();
var cfg = chart.config(); // retrieve default config
var svg = d3.select(".chart-container").append("svg")
  .attr("width", cfg.w + cfg.w + 50)
  .attr("height", cfg.h + cfg.h / 4);
svg.append("g").classed("single", 1).datum(randomDataset()).call(chart);

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".modal").modal();
});
