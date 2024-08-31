const FormRegister = document.querySelector(".login-form");
FormRegister.addEventListener("submit", registerEvent);

function registerEvent(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password == "") {
       return alert("Please fill in all fields");
    }

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);
    console.log(formObject);
    form.reset;
}