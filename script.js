// Section 1: Button Click Event
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked! 🎉"); // Alert when the button is clicked
    // Change the button text and background color
    this.textContent = "You clicked me! 😄";
    this.style.backgroundColor = "#6200ea"; // Change the button color to purple
    console.log("Button text and color updated");
});

// Section 2: Hover Effect
document.getElementById("myElement").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow"; // Change background color on hover
});

document.getElementById("myElement").addEventListener("mouseout", function() {
    this.style.backgroundColor = ""; // Reset background color when mouse leaves
});

// Section 3: Keypress Detection
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key); // Log the key pressed to the console
});

// Section 4: Button Changes Text and Color
document.getElementById("changeButton").addEventListener("click", function() {
    this.textContent = "I was clicked! 😄"; // Change the button text
    this.style.backgroundColor = "lightblue"; // Change the button color
    console.log("Button text and color updated");
});

// Section 5: Image Gallery (Slideshow)
let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of images for the slideshow
const imgElement = document.getElementById("slideshowImage");

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
    imgElement.src = images[currentImageIndex]; // Update image source
}

document.getElementById("nextButton").addEventListener("click", showNextImage);

// Section 6: Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    const inputField = document.getElementById("inputField");
    const emailField = document.getElementById("emailField");
    const passwordField = document.getElementById("passwordField");

    // Required field check for the name
    if (inputField.value.trim() === "") {
        event.preventDefault(); // Prevent form submission
        alert("Name is required! Please fill it out.");
        return;
    }

    // Email format validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        return;
    }

    // Password length check
    if (passwordField.value.length < 8) {
        event.preventDefault();
        alert("Password must be at least 8 characters long.");
        return;
    }
});
