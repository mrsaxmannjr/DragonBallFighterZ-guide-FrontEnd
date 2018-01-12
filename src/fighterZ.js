const baseURL = "https://shrouded-castle-10979.herokuapp.com/";
// var charCarousel;
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
  // slider.carousel({  });
  var charCarousel = document.querySelector(".carousel");
  for (var i = 0; i < glbResponse[0].length; i++) {
    var charAtag = document.createElement("a");
    charAtag.classList.add("carousel-item");
    charAtag.href = "#!";
    charAtag.index = i
    var charImg = document.createElement("img");
    charImg.src = glbResponse[0][i].image;
    charImg.alt = glbResponse[0][i].name;
    charAtag.appendChild(charImg);

    const clickHandler = event => {
      document.querySelector("#charName").textContent = event.target.alt;
      for (var j = 0; j < glbResponse[0].length; j++) {
        if (glbResponse[0][j].name === event.target.alt) {
          document.querySelector("#bio").textContent = glbResponse[0][j].bio;
          document.querySelector("#wikiLink").href = glbResponse[0][j].url;
          document.querySelector("#wikiLink").textContent =
            glbResponse[0][j].name + " Dragon Ball Wiki page";
          document.querySelector("#statTotal").textContent =
            "Stat Total: " + glbResponse[0][j].StatTotal;
        }
      }
      createRadar();
    }
    charAtag.addEventListener("click", handler);
    charAtag.addEventListener("touchend", handler);
    function handler(event) {
      // event.preventDefault();
      const lnk = event.target.tagName === 'A' ? event.target : event.target.parentNode;
      const idx = $(lnk).index();
      console.log('Image IDX:', idx, lnk);
      clickHandler(event)
      setTimeout(() => {
        $('.carousel').carousel('set', idx);
      }, 10)
       // charCarousel.carousel
      //
      // clickHandler(event);
      // document.querySelector("#charName").textContent = event.target.alt;
      // var carouselItems = document.querySelectorAll(".carousel-item");
      // for (var i = 0; i < carouselItems.length; i++) {
      //   if (carouselItems[i].classList.contains("active")) {
      //     for (var j = 0; j < glbResponse[0].length; j++) {
      //       if (glbResponse[0][j].name === event.target.alt) {
      //         document.querySelector("#bio").textContent =
      //           glbResponse[0][j].bio;
      //         document.querySelector("#wikiLink").href = glbResponse[0][j].url;
      //         document.querySelector("#wikiLink").textContent =
      //           glbResponse[0][j].name + " Dragon Ball Wiki page";
      //         document.querySelector("#statTotal").textContent =
      //           "Stat Total: " + glbResponse[0][j].StatTotal;
      //       }
      //     }
      //   }
      // }

      createRadar();
    }

    charCarousel.appendChild(charAtag);
  }

  // if (charCarousel.classList.contains("initialized")) {
  //   charCarousel.classList.remove("initialized");
  // }
  slider.carousel({
    // onCycleTo: function (ele, dragged) {
    //   // console.log(ele[0]);
    //   // console.log($(ele).index()); // the slide's index
    //   // console.log(dragged);
    // }

  });
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
