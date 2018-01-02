const baseURL = "https://shrouded-castle-10979.herokuapp.com/";
var charCarousel;
var glbResponse = [];
var radarTemplate = [
  {
    className: "",
    axes: [
      { axis: "Power", value: 0 },
      { axis: "Speed", value: 0 },
      { axis: "Technique", value: 0 },
      { axis: "Reach", value: 0 },
      { axis: "Energy", value: 0 }
    ]
  }
];

fetch(`${baseURL}fighterZ`)
  .then(response => response.json())
  .then(response => {
    glbResponse.push(response);
    console.log(glbResponse);
    populateCarousel();
  })
  .catch(err => console.log(err));

function populateCarousel() {
  var slider = $(".carousel");
  slider.carousel();
  var charCarousel = document.querySelector(".carousel");
  for (var i = 0; i < glbResponse[0].length; i++) {
    var charAtag = document.createElement("a");
    charAtag.classList.add("carousel-item");
    charAtag.href = "#!";
    var charImg = document.createElement("img");
    charImg.src = glbResponse[0][i].image;
    charImg.alt = glbResponse[0][i].name;
    charAtag.appendChild(charImg);
    charAtag.addEventListener("click", event => {
      document.querySelector("#charName").textContent = event.target.alt;
      createRadar();
    });

    charCarousel.appendChild(charAtag);
  }

  if (charCarousel.classList.contains("initialized")) {
    charCarousel.classList.remove("initialized");
  }
  slider.carousel();
}

function createRadar() {
  for (var i = 0; i < glbResponse[0].length; i++) {
    if (glbResponse[0][i].name === event.target.alt) {
      radarTemplate[0].className = glbResponse[0][i].name;
      radarTemplate[0].axes[0].value = glbResponse[0][i].Power;
      radarTemplate[0].axes[1].value = glbResponse[0][i].Speed;
      radarTemplate[0].axes[2].value = glbResponse[0][i].Technique;
      radarTemplate[0].axes[3].value = glbResponse[0][i].Reach;
      radarTemplate[0].axes[4].value = glbResponse[0][i].Energy;

      RadarChart.defaultConfig.radius = 3;
      RadarChart.defaultConfig.w = 300;
      RadarChart.defaultConfig.h = 300;
      RadarChart.defaultConfig.levels = 5;
      RadarChart.defaultConfig.maxValue = 5;
      RadarChart.defaultConfig.factor = 0.85;
      RadarChart.draw(".chart-container", radarTemplate);
    }
  }
}

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".modal").modal();
});
