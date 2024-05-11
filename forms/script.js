function validateForm() {
    let isValid = true;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms").checked;

    if (fullname.trim() === "") {
      alert("Please enter your full name");
      isValid = false;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      isValid = false;
    }

    if (password.trim().length < 8) {
      alert("Password must be at least 8 characters long");
      isValid = false;
    }

    if (birthdate.trim() === "") {
      alert("Please enter your birthdate");
      isValid = false;
    }

    if (gender === "") {
      alert("Please select your gender");
      isValid = false;
    }

    if (country.trim() === "") {
      alert("Please enter your country");
      isValid = false;
    }

    if (!terms) {
      alert("Please agree to terms and conditions");
      isValid = false;
    }
    return isValid+ alert("Thank you "+ fullname + " Form submitted successfully!");
  }