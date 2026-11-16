
// CITYCONNECT WEBSITE JAVASCRIPT

// Explore More Button
function exploreServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

// Login Button
const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function() {
    alert("Welcome to CityConnect! Login feature coming soon.");
});

// Navigation Active Message
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + link.textContent);
    });
});

// Website Loaded Message
window.addEventListener("load", function() {
    console.log("CityConnect website loaded successfully!");
});
