let turnOf = 0;
const sliderLine = document.querySelector(".slider6");

document.querySelector(".next-slider").addEventListener("click", function () {
  turnOf = turnOf + 363;
  if (turnOf > 726) {
    turnOf = 0;
  }
  sliderLine.style.left = -turnOf + "px";
});
document.querySelector(".prev-slider").addEventListener("click", function () {
  turnOf = turnOf - 363;
  if (turnOf < 0) {
    turnOf = 726;
  }
  sliderLine.style.left = -turnOf + "px";
});
