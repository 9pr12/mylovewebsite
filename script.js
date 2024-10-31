// Emergency button functionality
let clickCount = 0;
const emergencyButton = document.getElementById("emergency-button");

emergencyButton.addEventListener("click", function () {
    clickCount++;
    if (clickCount === 5) {
        alert("Emergency Contact: Calling...");
        window.location.href = "tel:+34673843882"; // Initiates call to your number
    }
});

// Gratitude button functionality
const gratitudeButton = document.getElementById("gratitude-button");
gratitudeButton.addEventListener("click", function () {
    window.location.href = "gratitude.html"; // Redirects to gratitude page
});

// Function to send email
function sendEmail() {
    const message = document.getElementById("message").value;
    const email = "alaeelwalidpersonal@gmail.com";
    const subject = "Message from Khadija";
    
    // Create a mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
}
