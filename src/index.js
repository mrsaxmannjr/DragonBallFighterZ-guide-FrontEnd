const baseURL = "https://radiant-coast-65532.herokuapp.com/";

fetch(baseURL)
  .then(response => response.json())
  .then(response => {
    var charPallete = document.querySelector(".characterPallete");


    for (var i = 0; i < response.length; i++) {
      var charDiv = document.createElement("div");
      charDiv.textContent = response[i].name;
      charPallete.appendChild(charDiv);
    }
  })
  .catch(err => console.log(err));

fetch("https://radiant-coast-65532.herokuapp.com/",  {
  method: "post",
  body: JSON.stringify({greeting: "hello"}),
  headers: new Headers({
    "Content-Type": "application/json"
  })
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));
