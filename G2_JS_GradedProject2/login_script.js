document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    console.log("Login form submitted");

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password match stored values
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "resume.html"; // Redirect to resume page
    } else {
      document.getElementById("error-message").textContent =
        "Invalid username or password.";
    }
  });

const isLoggedIn = localStorage.getItem("isLoggedIn");

function preventBack() {
  if (isLoggedIn) {
    window.history.forward();
  }
}

window.addEventListener("popstate", function () {
  preventBack();
});
preventBack();
