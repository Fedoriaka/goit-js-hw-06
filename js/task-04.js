let counterValue = 0;
const buttonPlus = document.querySelector('[data-action = "increment"]');
const buttonMinus = document.querySelector('[data-action = "decrement"]');
const display = document.getElementById("value");

buttonPlus.addEventListener('click', () => {
    counterValue += 1;
    display.textContent = counterValue;
}
)
buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  display.textContent = counterValue;
});