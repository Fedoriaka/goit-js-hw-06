function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const textOfColor = document.querySelector(".color");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textOfColor.textContent = getRandomHexColor();
});