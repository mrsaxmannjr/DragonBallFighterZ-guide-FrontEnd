const baseURL = "https://shrouded-castle-10979.herokuapp.com/";

fetch(`${baseURL}saved-teamz`)
  .then(response => response.json())
  .then(response => {console.log(response);
    var dropDown = document.querySelector("select");

    for (var i = 0; i < response.length; i++) {
      var team = document.createElement("option");
      team.value = response[i].teamName;
      team.textContent = response[i].teamName;
      dropDown.appendChild(team);
    }
  })
  .catch(err => console.log(err));

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".modal").modal();
});
