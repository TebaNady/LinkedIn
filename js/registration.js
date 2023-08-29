document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("errorEmail").style.display = "block";
        inputStyle = document.getElementById("email");
        inputStyle.style.border = "1px solid red";
        return;
    }
    else {
        document.getElementById("errorEmail").style.display = "none";
    }

    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("errorPass").style.display = "block";
        inputStyle = document.getElementById("password");
        inputStyle.style.border = "1px solid red";
        return;
    }
    else {
        document.getElementById("errorPass").style.display = "none";
    }

    var user = {
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "Login.html";
});
function myFunction() {
    var passwordInput = document.getElementById("password")
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
