const modal = document.querySelector(".JS-modal");
const thumbnails = document.querySelectorAll(".thumbnail-image");
// Buttons
const btnNext = document.querySelector(".JS-next");
const btnPrev = document.querySelector(".JS-prev");
const btnClose = document.querySelector(".JS-close");

let imagesList = []
let imageActive = ""

for(let i = 0; i < thumbnails.length; i++) {
  const image = thumbnails[i].children[0].currentSrc;
  imagesList.push(image);
  thumbnails[i].addEventListener("click", function() {
    imageActive = thumbnails[i].children[0].currentSrc;
    modal.children[0].children[0].src = imageActive;
    modal.style.display = "block";
  });
}

btnClose.addEventListener("click", function() {
  modal.style.display = "none";
});

btnNext.addEventListener("click", function() {
console.log(imagesList);
for(let i = 0; i < imagesList.length; i++) {
  if(imageActive == imagesList[i]) {
    const next = imagesList[i + 1];
    setImage(next);
  }
}

});

btnPrev.addEventListener("click", function() {
console.log(imageActive);

});

function setImage(image) {
  modal.children[0].children[0].src = image;
  imageActive = image;
}