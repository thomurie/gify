"use strict";

console.log("Let's get this party started!");
const form = document.getElementById("query_gify");
const removeGifs = document.getElementById("remove_gifs");
const gifs = document.querySelector(".gifs");

async function requestData() {
  let userInputData = document.getElementById("search_gify").value;
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${userInputData}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );

  let data = response.data.data;
  createImages(data);
}

function createImageElem(imageData) {
  const makeImg = document.createElement("img");
  makeImg.classList.add("gif");
  makeImg.setAttribute("src", imageData);
  gifs.append(makeImg);
}

function createImages(imageData) {
  for (const obj of imageData) {
    createImageElem(obj.images.original.url);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  requestData();
});

removeGifs.addEventListener("click", function (e) {
  e.preventDefault();
  gifs.innerHTML = "";
  document.getElementById("search_gify").value = "";
});
