function validateForm() {
    let form = document.forms["applyJobForm"];
    let phone = form["phone"].value;
    let email = form["email"].value;
    let resume = form["resume"].value;

    let errorMessage = '';

    // Basic phone validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
        errorMessage = "Phone number must be 10 digits.";
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage = "Please enter a valid email address.";
    }

    // Ensure resume is PDF
    if (!resume.endsWith(".pdf")) {
        errorMessage = "Please upload a PDF resume.";
    }

    if (errorMessage) {
        document.getElementById('message').innerHTML = errorMessage;
        document.getElementById('message').style.color = 'red';
        return false;
    }

    // Success message
    document.getElementById('message').innerHTML = "Application submitted successfully!";
    document.getElementById('message').style.color = 'green';
    return true;
}
