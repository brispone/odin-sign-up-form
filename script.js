document.querySelector("#user-info-form").addEventListener("submit", function(event) {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const messageText = document.querySelector("#pass-error-message");

    if (password.value != confirmPassword.value) {
        messageText.innerText = "PASSWORDS DO NOT MATCH";
        password.setCustomValidity("Passwords do not match.");
        confirmPassword.setCustomValidity("Passwords do not match.");
        event.preventDefault();
    } else {
        messageText.innerText= "";
    }
});

document.querySelector("#password").addEventListener("input", function() {
    this.setCustomValidity("");
    document.querySelector("#pass-error-message").innerText = "";
});

document.querySelector("#confirm-password").addEventListener("input", function() {
    this.setCustomValidity("");
    document.querySelector("#pass-error-message").innerText = "";
});