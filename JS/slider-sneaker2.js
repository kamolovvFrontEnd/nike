let turnOf1 = 0;
const sliderLine1 = document.querySelector(".slider6-2");

document.querySelector(".next-slider-2").addEventListener("click", function () {
  turnOf1 = turnOf1 + 363;
  if (turnOf1 > 726) {
    turnOf1 = 0;
  }
  sliderLine1.style.left = -turnOf1 + "px";
});
document.querySelector(".prev-slider-2").addEventListener("click", function () {
  turnOf1 = turnOf1 - 363;
  if (turnOf1 < 0) {
    turnOf1 = 726;
  }
  sliderLine1.style.left = -turnOf1 + "px";
});
