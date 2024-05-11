function validateForm() {
  let isValid = true;
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("genderSelect").value; // Ensure this matches the select ID
  const country = document.getElementById("countryInput").value; // Ensure this matches the input ID
  const terms = document.getElementById("termsCheckbox").checked; // Ensure this matches the checkbox ID

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

  if (isValid) {
      alert("Thank you " + fullname + ", your form has been submitted successfully!");
  }
  
  return isValid;
}
