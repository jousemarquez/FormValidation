// Function to validate the form and apply green shadow style if valid
function validateForm() {
    const formElements = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password")
    };

    const errorElements = {
        username: document.getElementById("usernameError"),
        email: document.getElementById("emailError"),
        password: document.getElementById("passwordError")
    };

    const validationRules = {
        username: (value) => value.length >= 10 && value.length <= 40,
        email: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
        password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
    };

    let valid = true;

    for (const field in formElements) {
        const value = formElements[field].value;
        const errorElement = errorElements[field];

        if (!validationRules[field](value)) {
            errorElement.innerHTML = getErrorMessage(field);
            errorElement.style.display = "block";
            valid = false;

            // Remove green shadow style on validation error
            formElements[field].classList.remove("valid-input");
        } else {
            errorElement.style.display = "none";

            // Apply green shadow style for valid input
            formElements[field].classList.add("valid-input");
        }
    }

    return valid;
}

// Function to get error messages based on the field name
function getErrorMessage(field) {
    const errorMessages = {
        username: "Error... The username must have between 10 and 40 characters.",
        email: "Error... Type a valid email.",
        password: "The password must have at least 1 uppercase letter, 1 lowercase letter, 1 number,<br>and 1 special character (@$!%?&), and be at least 8 characters long."
    };

    return errorMessages[field];
}

// Function to reset error messages and styles for all fields
function resetErrors() {
    const formElements = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password")
    };

    const errorElements = {
        username: document.getElementById("usernameError"),
        email: document.getElementById("emailError"),
        password: document.getElementById("passwordError")
    };

    for (const field in errorElements) {
        errorElements[field].style.display = "none";

        // Remove green shadow style on reset
        formElements[field].classList.remove("valid-input");
    }
}


/* // Function to validate the form.
function validateForm() {
    // Define form elements and error elements in objects for easy access.
    const formElements = {
        username: document.getElementById("username"),
        email: document.getElementById("email"),
        password: document.getElementById("password")
    };

    const errorElements = {
        username: document.getElementById("usernameError"),
        email: document.getElementById("emailError"),
        password: document.getElementById("passwordError")
    };

    // Define validation rules for each field
    const validationRules = {
        username: (value) => value.length >= 10 && value.length <= 40,
        // This validate the email is valid [blabla (at) bla bla (dot) bla].
        email: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
        // This validate the password needs 1 upper, 1 lower, 1 number, 1 special and 8 min characters.
        password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
    };

    let valid = true;

    // Iterate through form elements.
    for (const field in formElements) {
        const value = formElements[field].value;
        const errorElement = errorElements[field];

        // Check the value against the validation rules.
        if (!validationRules[field](value)) {
            errorElement.innerHTML = getErrorMessage(field);
            errorElement.style.display = "block";
            valid = false;
        } else {
            errorElement.style.display = "none";
        }
    }

    return valid;
}

// Function to get error messages based on the field name.
function getErrorMessage(field) {
    const errorMessages = {
        username: "Error... The username must have between 10 and 40 characters.",
        email: "Error... Type a valid email.",
        password: "The password must have at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (@$!%?&), and be at least 8 characters long."
    };

    return errorMessages[field];
}

// Function to reset error messages for all fields
function resetErrors() {
    const errorElements = {
        username: document.getElementById("usernameError"),
        email: document.getElementById("emailError"),
        password: document.getElementById("passwordError")
    };

    // Hide error elements for all fields
    for (const field in errorElements) {
        errorElements[field].style.display = "none";
    }
} */