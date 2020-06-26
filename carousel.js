const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelectorAll(".carouselImages img");
const active = document.querySelector("#JS-active");
// Buttons
const btnNext = document.querySelector(".JS-next");
const btnPrev = document.querySelector(".JS-prev");

// Counter
let counter = 1;

active.src = carouselImages[0].src;
active.style.transform = "translateX(200px)";
// Button listeners
btnNext.addEventListener("click", () => {
  if (counter == carouselImages.length) {
    counter = 0;
  }
  // start animation
  active.style.transform = "translateX(0px)";

  active.src = carouselImages[counter].src;
  counter++;
  console.log(counter);
  sleep(2);
});

console.log(carousel);
console.log(carouselImages);
