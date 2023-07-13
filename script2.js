let bars = document.getElementById("bars");
let navul = document.getElementById("navul");
navul.classList.toggle("left");
bars.classList.toggle("red");


bars.addEventListener("click", () => {
  navul.classList.toggle("left");
  bars.classList.toggle("fa-bars");
  bars.classList.toggle("fa-xmark");
  bars.classList.toggle("red");
});
