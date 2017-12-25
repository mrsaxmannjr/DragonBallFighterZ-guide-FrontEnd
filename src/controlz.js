var form = document.querySelector(".social");
var placeholder = document.querySelector("#controlScheme");

form.addEventListener("change", event => {
  if (event.target.value === "ps4") {
    placeholder.src = "/Assets/ps4.jpeg";
  } else if (event.target.value === "xbox") {
    placeholder.src = "/Assets/xbox.jpeg";
  }
});
