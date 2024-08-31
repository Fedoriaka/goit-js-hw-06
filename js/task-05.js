const textInput = document.getElementById("name-input"); 
const textOutput = document.getElementById("name-output"); 

textInput.addEventListener("input", () => {
    textOutput.textContent = textInput.value.trim() === "" ? "Anonymous" : textInput.value;
})