const baseURL = "https://shrouded-castle-10979.herokuapp.com/";
var glbresponse = [];
var pointCharacter;
var altCharacter1;
var altCharacter2;

fetch(baseURL)
  .then(response => response.json())
  .then(response => {
    glbresponse.push(response);
    var charPalette = document.querySelector(".characterPalette");

    for (var i = 0; i < response.length; i++) {
      var charAtag = document.createElement("a");

      var charImg = document.createElement("img");
      charImg.src = response[i].image;
      charImg.alt = response[i].name;
      charImg.classList.add("charImg")

      charAtag.classList.add(
        "waves-effect",
        "waves-light",
        "modal-trigger"
      );
      charAtag.href = "#modal1";

      charAtag.addEventListener("click", event => {
        for (var j = 0; j < glbresponse[0].length; j++) {
          if (glbresponse[0][j].name === event.target.textContent) {
            document.querySelector("h4").textContent = glbresponse[0][j].name;
            document.querySelector("h5").textContent =
              "Race: " + glbresponse[0][j].race;
            document.querySelector(".charImg").src = glbresponse[0][j].image;
            document.querySelector(".bio").textContent = glbresponse[0][j].bio;
            document.querySelector(".power").textContent =
              "Power: " + glbresponse[0][j].Power;
            document.querySelector(".speed").textContent =
              "Speed: " + glbresponse[0][j].Speed;
            document.querySelector(".technique").textContent =
              "Technique: " + glbresponse[0][j].Technique;
            document.querySelector(".reach").textContent =
              "Reach: " + glbresponse[0][j].Reach;
            document.querySelector(".energy").textContent =
              "Energy: " + glbresponse[0][j].Energy;
            document.querySelector(".easeOfUse").textContent =
              "Ease of use: " + glbresponse[0][j]["Ease of use"];
          }
        }
      });
      charAtag.appendChild(charImg)
      charPalette.appendChild(charAtag);
    }
  })
  .catch(err => console.log(err));

var pointChar = document.querySelector("#PC");
var alt1 = document.querySelector("#Alt1");
var alt2 = document.querySelector("#Alt2");

document.querySelector("#addToTeam").addEventListener("click", () => {
  if (!pointChar.textContent) {
    pointChar.textContent =
      "Point Character: " + document.querySelector("h4").textContent;
    pointCharacter = document.querySelector("h4").textContent;
  } else if (!alt1.textContent) {
    alt1.textContent =
      "Alt Character 1: " + document.querySelector("h4").textContent;
    altCharacter1 = document.querySelector("h4").textContent;
  } else if (!alt2.textContent) {
    alt2.textContent =
      "Alt Character 2: " + document.querySelector("h4").textContent;
    altCharacter2 = document.querySelector("h4").textContent;
  }
});

$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $(".modal").modal();
});

function sendFormData() {
  fetch(baseURL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(getFormData())
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      var savedTeam = document.querySelector(".savedTeam");
      savedTeam.textContent = response[0].teamName;

      savedTeam.classList.add(
        "waves-effect",
        "waves-light",
        "btn",
        "modal-trigger"
      );
      savedTeam.href = "#modal2";

      savedTeam.addEventListener("click", () => {
        document.querySelector(".teamName").textContent = response[0].teamName;
        document.querySelector(".teamDescription").textContent =
          response[0].teamDescription;
        document.querySelector(".wins").textContent = response[0].wins;
        document.querySelector(".losses").textContent = response[0].losses;
        document.querySelector(".draws").textContent = response[0].draws;
        document.querySelector(".PC").textContent =
          "Point Character: " + response[0].pc;
        document.querySelector(".Alt1").textContent =
          "Alt Character 1: " + response[0].alt1;
        document.querySelector(".Alt2").textContent =
          "Alt Character 2: " + response[0].alt2;
      });
      var dropDown = document.querySelector("select");

      for (var i = 0; i < response.length; i++) {
        var team = document.createElement("option");
        team.value = response[i].teamName;
        team.textContent = response[i].teamName;
        dropDown.appendChild(team);
      }
    })
    .catch(err => console.log(err));
}
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  sendFormData();
});

function getFormData() {
  const data = new FormData(document.querySelector("form"));
  return {
    teamName: data.get("team_name"),
    teamDescription: data.get("team_description"),
    wins: data.get("wins"),
    losses: data.get("losses"),
    draws: data.get("draws"),
    pc: pointCharacter,
    alt1: altCharacter1,
    alt2: altCharacter2
  };
}
