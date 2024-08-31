function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreat = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector('input["type = number"]');
const boxes = document.getElementById("boxes");

buttonCreat.addEventListener("click", () => {
  const number = Number(inputNumber.value);
  createBoxes(number);
  inputNumber.innerHTML = "";
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.weight = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
  }
}

buttonDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
