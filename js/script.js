function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("number").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send("service_sg3z744", "template_9bde9i1", parms)
        .then(() => {
            // Show custom success message
            showSuccessMessage();
        })
        .catch(error => {
            console.error("Error sending email:", error);
        });
}

function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Hide the success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}

function closeSuccessMessage() {
    document.getElementById("successMessage").style.display = "none";
}
