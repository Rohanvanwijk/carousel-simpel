const carouselSlides = document.querySelector(".carousel").children;
const totalSlides = carouselSlides.length;
// Buttons
const btnNext = document.querySelector(".JS-next");
const btnPrev = document.querySelector(".JS-prev");

var currentSlide = 0;

// Button listeners
btnNext.addEventListener("click", () => {
  moveSlide(true);
});

btnPrev.addEventListener("click", () => {
  moveSlide(false);
});

function moveSlide(forward) {
  if (forward) {
    currentSlide++;
    if (currentSlide == totalSlides) {
      currentSlide = 0;
    }
  } else {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }
  }
  console.log(currentSlide);
  removeActiveClass("active");
  setActiveClass("active", currentSlide);
}

function removeActiveClass(className) {
  for (i = 0; i < totalSlides; i++) {
    carouselSlides[i].classList.remove(className);
  }
}

function setActiveClass(className, slide) {
  carouselSlides[slide].classList.add(className);
}
