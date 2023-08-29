document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var loginUsername = document.getElementById("loginUsername").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === loginUsername && user.password === loginPassword) {
        document.getElementById("errorPara").style.display = "none";
        window.location.href = "Home.html";
    } else {
        document.getElementById("errorPara").style.display = "block";
    }
});
function myFunction() {
    var passwordInput = document.getElementById("loginPassword");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

