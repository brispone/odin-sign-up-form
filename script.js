document.querySelector("#user-info-form").addEventListener("submit", function(event) {
    alert("Form Submitted");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");

    if (password.value === confirmPassword.value) {
        alert("Passwords match");
    }
});