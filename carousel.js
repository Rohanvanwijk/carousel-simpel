const carousel = document.querySelector(".carouselImages");
const carouselImages = document.querySelectorAll(".carouselImages img");
const active = document.querySelector("#JS-active");
// Buttons
const btnNext = document.querySelector(".JS-next");
const btnPrev = document.querySelector(".JS-prev");

// Counter
let counter = 1;

// Button listeners
btnNext.addEventListener("click", () => {
  if (counter == carouselImages.length) {
    counter = 0;
  }
  const size = carouselImages[counter].height;
  carousel.style.transform = `translateY(${-size * counter}px)`;

  counter++;
  console.log(size);
});

console.log(carousel);
console.log(carouselImages);
