var form = document.querySelector(".social");
var placeholder = document.querySelector("#controlScheme");
var tableDiv = document.querySelector(".tableDiv");
var controllerImg = document.querySelector(".controllerImg");

form.addEventListener("change", event => {
  if (event.target.value === "ps4") {
    placeholder.src = "/Assets/ps4.jpeg";
    controllerImg.classList.add("addBorder");
    controllerImg.classList.add("addFrame");
    tableDiv.classList.add("addBorder");
    document.getElementById("hidethis").style.display = "";
    document.getElementById("th2").textContent = "PS4";
    document.getElementById("td2").textContent = "Square";
    document.getElementById("td3").textContent = "Triangle";
    document.getElementById("td4").textContent = "Circle";
    document.getElementById("td5").textContent = "X";
    document.getElementById("td6").textContent = "L1";
    document.getElementById("td7").textContent = "L2";
    document.getElementById("td8").textContent = "X + Circle";
    document.getElementById("td9").textContent = "X + Square";
    document.getElementById("td10").textContent =
      "X + Circle + Square + Triangle";
    document.getElementById("td11").textContent = "Square + Triangle";
    document.getElementById("td12").textContent = "Triangle + Circle";
  } else if (event.target.value === "xbox") {
    placeholder.src = "/Assets/xbox.jpeg";
    controllerImg.classList.add("addBorder");
    controllerImg.classList.add("addFrame");
    tableDiv.classList.add("addBorder");
    document.getElementById("hidethis").style.display = "";
    document.getElementById("th2").textContent = "XBOX ONE";
    document.getElementById("td2").textContent = "X";
    document.getElementById("td3").textContent = "Y";
    document.getElementById("td4").textContent = "B";
    document.getElementById("td5").textContent = "A";
    document.getElementById("td6").textContent = "LB";
    document.getElementById("td7").textContent = "LT";
    document.getElementById("td8").textContent = "A + B";
    document.getElementById("td9").textContent = "A + X";
    document.getElementById("td10").textContent = "A + B + X + Y";
    document.getElementById("td11").textContent = "X + Y";
    document.getElementById("td12").textContent = "Y + B";
  }
});

$(document).ready(function() {
  $(".button-collapse").sideNav();
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $(".modal").modal();
});
