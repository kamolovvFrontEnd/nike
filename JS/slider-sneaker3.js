let turnOf2 = 0;
const sliderLine2 = document.querySelector(".slider6-3");

document.querySelector(".next-slider-3").addEventListener("click", function () {
  turnOf2 = turnOf2 + 363;
  if (turnOf2 > 726) {
    turnOf2 = 0;
  }
  sliderLine2.style.left = -turnOf2 + "px";
});
document.querySelector(".prev-slider-3").addEventListener("click", function () {
  turnOf2 = turnOf2 - 363;
  if (turnOf2 < 0) {
    turnOf2 = 726;
  }
  sliderLine2.style.left = -turnOf2 + "px";
});