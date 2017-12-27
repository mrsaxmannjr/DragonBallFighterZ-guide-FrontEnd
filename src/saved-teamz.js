const baseURL = "https://shrouded-castle-10979.herokuapp.com/";

var glbresponse = [];
var pointCharacter;
var altCharacter1;
var altCharacter2;

fetch(`${baseURL}saved-teamz`)
  .then(response => response.json())
  .then(response => {
    glbresponse.push(response);
    var dropDown = document.querySelector("select");
    for (var i = 0; i < response.length; i++) {
      var team = document.createElement("option");
      team.value = response[i].teamName;
      team.textContent = response[i].teamName;
      dropDown.appendChild(team);
    }
    dropDown.addEventListener("input", event => {
      for (var j = 0; j < glbresponse[0].length; j++) {
        if (glbresponse[0][j].teamName === event.target.value) {
          document.querySelector("#PC").src = glbresponse[0][j].pc;
          pointCharacter = document.querySelector("#PC").src;
          document.querySelector("#Alt1").src = glbresponse[0][j].alt1;
          altCharacter1 = document.querySelector("#Alt1").src;
          document.querySelector("#Alt2").src = glbresponse[0][j].alt2;
          altCharacter2 = document.querySelector("#Alt2").src;
          document.querySelector("#team_name").value =
            glbresponse[0][j].teamName;
          document.querySelector("#team_description").value =
            glbresponse[0][j].teamDescription;
          document.querySelector("#wins").value = glbresponse[0][j].wins;
          document.querySelector("#losses").value = glbresponse[0][j].losses;
          document.querySelector("#draws").value = +glbresponse[0][j].draws;
        }
      }
    });
  })
  .catch(err => console.log(err));

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

document.querySelector("select").addEventListener("input", () => {
  document.querySelector("#hideForm").style.display = "";
  document.querySelector(".seeTeams").style.display = "";
});

document.querySelector("#wins").addEventListener("click", () => {
  document.querySelector(".hideWLabel").style.display = "";
});

document.querySelector("#losses").addEventListener("click", () => {
  document.querySelector(".hideLLabel").style.display = "";
});

document.querySelector("#draws").addEventListener("click", () => {
  document.querySelector(".hideDLabel").style.display = "";
});

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".modal").modal();
});
