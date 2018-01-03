const baseURL = "https://shrouded-castle-10979.herokuapp.com/";

var glbresponse = [];
var glbresponse2 = [];
var pointCharacter;
var pointCharName;
var altCharacter1;
var alt1CharName;
var altCharacter2;
var alt2CharName;

fetch(`${baseURL}saved-teamz`)
  .then(response => response.json())
  .then(response => {
    glbresponse2.push(response);
    var dropDown = document.querySelector("select");
    for (var i = 0; i < response.length; i++) {
      var team = document.createElement("option");
      team.value = response[i].teamName;
      team.textContent = response[i].teamName;
      dropDown.appendChild(team);
    }
    dropDown.addEventListener("input", event => {
      for (var j = 0; j < glbresponse2[0].length; j++) {
        if (glbresponse2[0][j].teamName === event.target.value) {
          document.querySelector("#PC").src = glbresponse2[0][j].pc;
          pointCharacter = document.querySelector("#PC").src;
          document.querySelector("#PC").alt = glbresponse2[0][j].pcName;
          document.querySelector("#PCName").textContent =
            glbresponse2[0][j].pcName;
          pointCharName = document.querySelector("#PCName").textContent;
          document.querySelector("#Alt1").src = glbresponse2[0][j].alt1;
          altCharacter1 = document.querySelector("#Alt1").src;
          document.querySelector("#Alt1").alt = glbresponse2[0][j].alt1Name;
          document.querySelector("#Alt1Name").textContent =
            glbresponse2[0][j].alt1Name;
          alt1CharName = document.querySelector("#Alt1Name").textContent;
          document.querySelector("#Alt2").src = glbresponse2[0][j].alt2;
          altCharacter2 = document.querySelector("#Alt2").src;
          document.querySelector("#Alt2").alt = glbresponse2[0][j].alt2Name;
          document.querySelector("#Alt2Name").textContent =
            glbresponse2[0][j].alt2Name;
          alt2CharName = document.querySelector("#Alt2Name").textContent;
          document.querySelector("#team_name").value =
            glbresponse2[0][j].teamName;
          document.querySelector("#team_description").value =
            glbresponse2[0][j].teamDescription;
          document.querySelector("#wins").value = glbresponse2[0][j].wins;
          document.querySelector("#losses").value = glbresponse2[0][j].losses;
          document.querySelector("#draws").value = +glbresponse2[0][j].draws;
        }
      }
      pcListener();
      alt1Listener();
      alt2Listener();
    });
  })
  .catch(err => console.log(err));

function pcListener() {
  var pcAtag = document.querySelector("#pcAtag");
  pcAtag.classList.add("modal-trigger");
  pcAtag.href = "#modal3";
  pcAtag.addEventListener("click", () => {
    for (var j = 0; j < glbresponse[0].length; j++) {
      if (glbresponse[0][j].name === event.target.alt) {
        document.querySelector("#pch4").textContent = glbresponse[0][j].name;
        document.querySelector("#pcimg").src = glbresponse[0][j].image;
        document.querySelector("#pcimg").alt = glbresponse[0][j].name;
        document.querySelector("#pcbio").textContent = glbresponse[0][j].bio;
        document.querySelector("#pcpower").textContent =
          "Power: " + glbresponse[0][j].Power;
        document.querySelector("#pcspeed").textContent =
          "Speed: " + glbresponse[0][j].Speed;
        document.querySelector("#pctechnique").textContent =
          "Technique: " + glbresponse[0][j].Technique;
        document.querySelector("#pcreach").textContent =
          "Reach: " + glbresponse[0][j].Reach;
        document.querySelector("#pcenergy").textContent =
          "Energy: " + glbresponse[0][j].Energy;
        document.querySelector("#pcEaseOfUse").textContent =
          "Ease of use: " + glbresponse[0][j]["Ease of use"];
      }
    }
    document.querySelector("#removePcFromTeam").style.display = "";
    document.querySelector("#removeAlt1FromTeam").style.display = "none";
    document.querySelector("#removeAlt2FromTeam").style.display = "none";
    addListener("#removePcFromTeam", pointChar, PCName, pcAtag);
  });
}

function alt1Listener () {
  var alt1Atag = document.querySelector("#alt1Atag");
  alt1Atag.classList.add("modal-trigger");
  alt1Atag.href = "#modal3";
  alt1Atag.addEventListener("click", () => {
    for (var j = 0; j < glbresponse[0].length; j++) {
      if (glbresponse[0][j].name === event.target.alt) {
        document.querySelector("#pch4").textContent = glbresponse[0][j].name;
        document.querySelector("#pcimg").src = glbresponse[0][j].image;
        document.querySelector("#pcimg").alt = glbresponse[0][j].name;
        document.querySelector("#pcbio").textContent = glbresponse[0][j].bio;
        document.querySelector("#pcpower").textContent =
          "Power: " + glbresponse[0][j].Power;
        document.querySelector("#pcspeed").textContent =
          "Speed: " + glbresponse[0][j].Speed;
        document.querySelector("#pctechnique").textContent =
          "Technique: " + glbresponse[0][j].Technique;
        document.querySelector("#pcreach").textContent =
          "Reach: " + glbresponse[0][j].Reach;
        document.querySelector("#pcenergy").textContent =
          "Energy: " + glbresponse[0][j].Energy;
        document.querySelector("#pcEaseOfUse").textContent =
          "Ease of use: " + glbresponse[0][j]["Ease of use"];
      }
    }
    document.querySelector("#removeAlt1FromTeam").style.display = "";
    document.querySelector("#removePcFromTeam").style.display = "none";
    document.querySelector("#removeAlt2FromTeam").style.display = "none";
    addListener("#removeAlt1FromTeam", alt1, A1Name, alt1Atag);
  });
}

function alt2Listener () {
  var alt2Atag = document.querySelector("#alt2Atag");
  alt2Atag.classList.add("modal-trigger");
  alt2Atag.href = "#modal3";
  alt2Atag.addEventListener("click", event => {
    for (var j = 0; j < glbresponse[0].length; j++) {
      if (glbresponse[0][j].name === event.target.alt) {
        document.querySelector("#pch4").textContent = glbresponse[0][j].name;
        document.querySelector("#pcimg").src = glbresponse[0][j].image;
        document.querySelector("#pcimg").alt = glbresponse[0][j].name;
        document.querySelector("#pcbio").textContent = glbresponse[0][j].bio;
        document.querySelector("#pcpower").textContent =
          "Power: " + glbresponse[0][j].Power;
        document.querySelector("#pcspeed").textContent =
          "Speed: " + glbresponse[0][j].Speed;
        document.querySelector("#pctechnique").textContent =
          "Technique: " + glbresponse[0][j].Technique;
        document.querySelector("#pcreach").textContent =
          "Reach: " + glbresponse[0][j].Reach;
        document.querySelector("#pcenergy").textContent =
          "Energy: " + glbresponse[0][j].Energy;
        document.querySelector("#pcEaseOfUse").textContent =
          "Ease of use: " + glbresponse[0][j]["Ease of use"];
      }
    }
    document.querySelector("#removeAlt2FromTeam").style.display = "";
    document.querySelector("#removePcFromTeam").style.display = "none";
    document.querySelector("#removeAlt1FromTeam").style.display = "none";
    addListener("#removeAlt2FromTeam", alt2, A2Name, alt2Atag);
  });
}

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
      charImg.classList.add("charImg");
      charAtag.classList.add("modal-trigger");
      charAtag.href = "#modal1";
      charAtag.appendChild(charImg);
      charAtag.addEventListener("click", event => {
        for (var j = 0; j < glbresponse[0].length; j++) {
          if (glbresponse[0][j].name === event.target.alt) {
            // document.querySelector(".statImg").src = glbresponse[0][j].StatImg;
            document.querySelector(".charName").textContent =
              glbresponse[0][j].name;
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
    // For PC Modal
    var pcAtag = document.querySelector("#pcAtag");
    pcAtag.classList.add("modal-trigger");
    pcAtag.href = "#modal3";
    pcAtag.addEventListener("click", () => {
      for (var j = 0; j < glbresponse[0].length; j++) {
        if (glbresponse[0][j].name === event.target.alt) {
          document.querySelector("#pch4").textContent = glbresponse[0][j].name;
          document.querySelector("#pcimg").src = glbresponse[0][j].image;
          document.querySelector("#pcimg").alt = glbresponse[0][j].name;
          document.querySelector("#pcbio").textContent = glbresponse[0][j].bio;
          document.querySelector("#pcpower").textContent =
            "Power: " + glbresponse[0][j].Power;
          document.querySelector("#pcspeed").textContent =
            "Speed: " + glbresponse[0][j].Speed;
          document.querySelector("#pctechnique").textContent =
            "Technique: " + glbresponse[0][j].Technique;
          document.querySelector("#pcreach").textContent =
            "Reach: " + glbresponse[0][j].Reach;
          document.querySelector("#pcenergy").textContent =
            "Energy: " + glbresponse[0][j].Energy;
          document.querySelector("#pcEaseOfUse").textContent =
            "Ease of use: " + glbresponse[0][j]["Ease of use"];
        }
      }
      document.querySelector("#removePcFromTeam").style.display = "";
      document.querySelector("#removeAlt1FromTeam").style.display = "none";
      document.querySelector("#removeAlt2FromTeam").style.display = "none";
      addListener("#removePcFromTeam", pointChar, PCName, pcAtag);
    });
  } else if (!alt1.alt) {
    alt1.src = document.querySelector(".iconImg").src;
    alt1.alt = document.querySelector(".iconImg").alt;
    altCharacter1 = document.querySelector(".iconImg").src;
    A1Name.textContent = document.querySelector(".charName").textContent;
    alt1CharName = document.querySelector(".charName").textContent;
    // For Alt1 Modal
    var alt1Atag = document.querySelector("#alt1Atag");
    alt1Atag.classList.add("modal-trigger");
    alt1Atag.href = "#modal3";
    alt1Atag.addEventListener("click", () => {
      for (var j = 0; j < glbresponse[0].length; j++) {
        if (glbresponse[0][j].name === event.target.alt) {
          document.querySelector("#pch4").textContent = glbresponse[0][j].name;
          document.querySelector("#pcimg").src = glbresponse[0][j].image;
          document.querySelector("#pcimg").alt = glbresponse[0][j].name;
          document.querySelector("#pcbio").textContent = glbresponse[0][j].bio;
          document.querySelector("#pcpower").textContent =
            "Power: " + glbresponse[0][j].Power;
          document.querySelector("#pcspeed").textContent =
            "Speed: " + glbresponse[0][j].Speed;
          document.querySelector("#pctechnique").textContent =
            "Technique: " + glbresponse[0][j].Technique;
          document.querySelector("#pcreach").textContent =
            "Reach: " + glbresponse[0][j].Reach;
          document.querySelector("#pcenergy").textContent =
            "Energy: " + glbresponse[0][j].Energy;
          document.querySelector("#pcEaseOfUse").textContent =
            "Ease of use: " + glbresponse[0][j]["Ease of use"];
        }
      }
      document.querySelector("#removeAlt1FromTeam").style.display = "";
      document.querySelector("#removePcFromTeam").style.display = "none";
      document.querySelector("#removeAlt2FromTeam").style.display = "none";
      addListener("#removeAlt1FromTeam", alt1, A1Name, alt1Atag);
    });
  } else if (!alt2.alt) {
    alt2.src = document.querySelector(".iconImg").src;
    alt2.alt = document.querySelector(".iconImg").alt;
    altCharacter2 = document.querySelector(".iconImg").src;
    A2Name.textContent = document.querySelector(".charName").textContent;
    alt2CharName = document.querySelector(".charName").textContent;
    // For Alt2 Modal
    var alt2Atag = document.querySelector("#alt2Atag");
    alt2Atag.classList.add("modal-trigger");
    alt2Atag.href = "#modal3";
    alt2Atag.addEventListener("click", event => {
      for (var j = 0; j < glbresponse[0].length; j++) {
        if (glbresponse[0][j].name === event.target.alt) {
          document.querySelector("#pch4").textContent = glbresponse[0][j].name;
          document.querySelector("#pcimg").src = glbresponse[0][j].image;
          document.querySelector("#pcimg").alt = glbresponse[0][j].name;
          document.querySelector("#pcbio").textContent = glbresponse[0][j].bio;
          document.querySelector("#pcpower").textContent =
            "Power: " + glbresponse[0][j].Power;
          document.querySelector("#pcspeed").textContent =
            "Speed: " + glbresponse[0][j].Speed;
          document.querySelector("#pctechnique").textContent =
            "Technique: " + glbresponse[0][j].Technique;
          document.querySelector("#pcreach").textContent =
            "Reach: " + glbresponse[0][j].Reach;
          document.querySelector("#pcenergy").textContent =
            "Energy: " + glbresponse[0][j].Energy;
          document.querySelector("#pcEaseOfUse").textContent =
            "Ease of use: " + glbresponse[0][j]["Ease of use"];
        }
      }
      document.querySelector("#removeAlt2FromTeam").style.display = "";
      document.querySelector("#removePcFromTeam").style.display = "none";
      document.querySelector("#removeAlt1FromTeam").style.display = "none";
      addListener("#removeAlt2FromTeam", alt2, A2Name, alt2Atag);
    });
  }
});
function addListener(button, teamMemberSlot, teamMemberName, teamMemberAtag) {
  document.querySelector(button).addEventListener("click", () => {
    teamMemberSlot.src = "/Assets/placeholder-pic.png";
    teamMemberSlot.alt = "";
    teamMemberName.textContent = "";
    teamMemberAtag.classList.remove("modal-trigger");
    teamMemberAtag.href = "#!";
  });
}

function sendFormData() {
  fetch(`${baseURL}saved-teamz`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(getFormData())
  })
    .then(response => response.json())
    .then(response => {
      var message = document.querySelector("p");
      message.textContent = response;
      setTimeout(() => {
        message.textContent = "";
      }, 4000);
      setTimeout(() => {
        window.location.reload(true);
      }, 4000);
    })
    .catch(err => console.log(err));
}

document.querySelector("#hideForm").addEventListener("submit", event => {
  event.preventDefault();
  sendFormData();
});

function getFormData() {
  const data = new FormData(document.querySelector("#hideForm"));
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

document.querySelector("select").addEventListener("input", () => {
  document.querySelector("#hideForm").style.display = "";
  document.querySelector(".charDiv").style.display = "";
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
