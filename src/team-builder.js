const baseURL = "https://shrouded-castle-10979.herokuapp.com/";

var glbresponse = [];
var pointCharacter;
var pointCharName;
var altCharacter1;
var alt1CharName;
var altCharacter2;
var alt2CharName;

fetch(baseURL)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    glbresponse.push(response);
    var charPalette = document.querySelector(".characterPalette");
    for (var i = 0; i < response.length; i++) {
      var charAtag = document.createElement("a");
      var charImg = document.createElement("img");
      charImg.src = response[i].image;
      charImg.alt = response[i].name;
      charImg.classList.add("charImg");
      charAtag.classList.add("modal-trigger");
      charAtag.href = "#modal1";
      charAtag.appendChild(charImg);
      charAtag.addEventListener("click", event => {
        for (var j = 0; j < glbresponse[0].length; j++) {
          if (glbresponse[0][j].name === event.target.alt) {
            document.querySelector(".charName").textContent =
              glbresponse[0][j].name;
            document.querySelector("h5").textContent =
              "Race: " + glbresponse[0][j].race;
            document.querySelector(".iconImg").src = glbresponse[0][j].image;
            document.querySelector(".iconImg").alt = glbresponse[0][j].name;
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
      charPalette.appendChild(charAtag);
    }
  })
  .catch(err => console.log(err));

var pointChar = document.querySelector("#PC");
var PCName = document.querySelector("#PCName");
var alt1 = document.querySelector("#Alt1");
var A1Name = document.querySelector("#Alt1Name");
var alt2 = document.querySelector("#Alt2");
var A2Name = document.querySelector("#Alt2Name");
var tName = document.querySelector("#team_name");
var tDescription = document.querySelector("#team_description");

document.querySelector("#addToTeam").addEventListener("click", () => {
  if (!pointChar.alt) {
    pointChar.src = document.querySelector(".iconImg").src;
    pointChar.alt = document.querySelector(".iconImg").alt;
    pointCharacter = document.querySelector(".iconImg").src;
    PCName.textContent = document.querySelector(".charName").textContent;
    pointCharName = document.querySelector(".charName").textContent;
  } else if (!alt1.alt) {
    alt1.src = document.querySelector(".iconImg").src;
    alt1.alt = document.querySelector(".iconImg").alt;
    altCharacter1 = document.querySelector(".iconImg").src;
    A1Name.textContent = document.querySelector(".charName").textContent;
    alt1CharName = document.querySelector(".charName").textContent;
  } else if (!alt2.alt) {
    alt2.src = document.querySelector(".iconImg").src;
    alt2.alt = document.querySelector(".iconImg").alt;
    altCharacter2 = document.querySelector(".iconImg").src;
    A2Name.textContent = document.querySelector(".charName").textContent;
    alt2CharName = document.querySelector(".charName").textContent;
  }
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
      var message = document.querySelector("p");
      message.textContent = response[0].teamName + " was added To Your Saved TeamZ!";
      setTimeout(() => {
        message.textContent = "";
      }, 4000);
      var savedTeam = document.querySelector(".savedTeam");
      savedTeam.textContent = response[0].teamName;
      savedTeam.classList.add(
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
        document.querySelector(".PC").src = response[0].pc;
        document.querySelector(".Alt1").src = response[0].alt1;
        document.querySelector(".Alt2").src = response[0].alt2;
      });
    })
    .catch(err => console.log(err));
}

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  if (!pointChar.alt || !alt1.alt || !alt2.alt) {
    window.alert("Your team is incomplete, please choose 3 FighterZ!");
  } else if (!tName.value) {
    window.alert("Your Team Name is incomplete, please give your team of FighterZ a fitting Team Name!");
  } else if (!tDescription.value) {
    window.alert("Your Team Description is incomplete, please give your team of FighterZ a fitting Team Description!");
  } else {
    sendFormData();
  }
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
    pcName: pointCharName,
    alt1: altCharacter1,
    alt1Name: alt1CharName,
    alt2: altCharacter2,
    alt2Name: alt2CharName
  };
}

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".modal").modal();
});
