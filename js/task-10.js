function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.getElementById("boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const numberInput = document.querySelector('input[type="number"]');
createButton.addEventListener("click", () => {
  const number = Number(numberInput.value);
  createBoxes(number);
   numberInput.value = "";
  
});
destroyButton.addEventListener("click", () => {
  boxes.innerHTML = ""; 
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
  }
}