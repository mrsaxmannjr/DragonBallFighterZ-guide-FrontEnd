const baseURL = "https://radiant-coast-65532.herokuapp.com/";
var glbresponse = [];

fetch(baseURL)
  .then(response => response.json())
  .then(response => {
    glbresponse.push(response);
    var charPalette = document.querySelector(".characterPalette");
    console.log("global response: ", glbresponse);

    for (var i = 0; i < response.length; i++) {
      var charAtag = document.createElement("a");
      charAtag.textContent = response[i].name;
      charAtag.classList.add(
        "waves-effect",
        "waves-light",
        "btn",
        "modal-trigger"
      );
      charAtag.href = "#modal1";

      charAtag.addEventListener("click", event => {
        for (var j = 0; j < glbresponse[0].length; j++) {
          if (glbresponse[0][j].name === event.target.textContent) {
            document.querySelector("h4").textContent = glbresponse[0][j].name;
            document.querySelector("h5").textContent = "Race: " + glbresponse[0][j].race;
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

document.querySelector(#addToTeam).addEventListener("click", () => {
  
})


fetch("https://radiant-coast-65532.herokuapp.com/", {
  method: "post",
  body: JSON.stringify({ greeting: "hello" }),
  headers: new Headers({
    "Content-Type": "application/json"
  })
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));

$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $(".modal").modal();
});
