console.log("%c HI", "color: firebrick");
//Global Variables
const dogImageContainer = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const filterDropdown = document.getElementById("breed-dropdown");
const dogImagesArr = [];
const dogBreedsArr = [];
let filteredBreedArr = [];
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", (e) => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      data.message.forEach((images) => dogImagesArr.push(images));
      dogImagesArr.forEach(createDogImages);
    });

  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      Object.keys(data.message).forEach((dogBreed) =>
        dogBreedsArr.push(dogBreed)
      );
      dogBreedsArr.forEach(breedListAdd);
    });
});

function createDogImages(images) {
  const dogPhotos = document.createElement("img");
  dogPhotos.src = images;
  dogImageContainer.appendChild(dogPhotos);
}

function breedListAdd(breed) {
  let breedList = document.createElement("li");
  breedList.innerText = breed;
  breedList.addEventListener("click", changeTextColor);
  dogBreeds.appendChild(breedList);
}

function changeTextColor(e) {
  e.target.style.color = "blue";
}

filterDropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    filteredBreedArr = [];
    dogBreedsArr.forEach(breed=>{
      if (breed.startsWith(selectedLetter)) {
        filteredBreedArr.push(breed);
      }
    })
    dogBreeds.innerText = "";
    filteredBreedArr.forEach(breedListAdd);
  }); 


//original idea but i thought it looked awful. 
  // filterDropdown.addEventListener("change", (e) => {
//   if (e.target.selectedIndex === 0) {
//     document
//       .querySelectorAll("li")
//       .forEach((li) => (li.style.visibility = "visible"));
//     document.querySelectorAll("li").forEach((li) => {
//       if (li.textContent.charAt(0) !== "a") {
//         li.style.visibility = "hidden";
//       }
//     });
//   } else if (e.target.selectedIndex === 1) {
//     document
//       .querySelectorAll("li")
//       .forEach((li) => (li.style.visibility = "visible"));
//     document.querySelectorAll("li").forEach((li) => {
//       if (li.textContent.charAt(0) !== "b") {
//         li.style.visibility = "hidden";
//       }
//     });
//   } else if (e.target.selectedIndex === 2) {
//     document
//       .querySelectorAll("li")
//       .forEach((li) => (li.style.visibility = "visible"));
//     document.querySelectorAll("li").forEach((li) => {
//       if (li.textContent.charAt(0) !== "c") {
//         li.style.visibility = "hidden";
//       }
//     });
//   } else if (e.target.selectedIndex === 3) {
//     document
//       .querySelectorAll("li")
//       .forEach((li) => (li.style.visibility = "visible"));
//     document.querySelectorAll("li").forEach((li) => {
//       if (li.textContent.charAt(0) !== "d") {
//         li.style.visibility = "hidden";
//       }
//     });
//   }
// });
