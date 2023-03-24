const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const messageText = document.querySelector("#pass-error-message");

document.querySelector("#user-info-form").addEventListener("submit", function(event) {

    if (password.value != confirmPassword.value) {
        messageText.innerText = "PASSWORDS DO NOT MATCH";
        password.setCustomValidity("Passwords do not match.");
        confirmPassword.setCustomValidity("Passwords do not match.");
        event.preventDefault();
    } else {
        messageText.innerText= "";
    }
});

password.addEventListener("input", function() {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    messageText.innerText = "";
});

confirmPassword.addEventListener("input", function() {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    messageText.innerText = "";
});