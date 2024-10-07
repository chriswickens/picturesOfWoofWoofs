// Written by: Chris Wickens

let breedList = document.querySelector("#breedList");
let output = document.querySelector("#output");

// Async function that retrieves the list of breeds from the API
// Run onload from the <body> tag in html
async function getBreeds() {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();
  let outputString = "";
  console.log(data);
  console.log(Object.keys(data.message));
  Object.keys(data.message).forEach((breed) => {
    outputString += `<option value="${breed}">${breed}</option>`;
  });
  breedList.innerHTML = outputString;
}

// Async function that retrieves the images from the API
async function getImages(number) {
  // console.log(number);
  // Double check to make sure the user entered something
  if (isNaN(number) || number === "") {
    output.innerHTML = "Please enter a number";
    return;
  } else {
    let breed = breedList.value;
    let url = `https://dog.ceo/api/breed/${breed}/images/random/${number}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let outputString = "";
        data.message.forEach((image) => {
          outputString += `<a href="${image}" target="_blank"><img height="200px" src="${image}" /></a>`;
        });
        // output.style.background - color == "red";
        output.style.border = "10px groove black";
        output.innerHTML = outputString;
      });
  }
}
