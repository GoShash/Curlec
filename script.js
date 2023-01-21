const form = document.getElementById("lead-gen-form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const company = document.getElementById("company");

  if (!name.value) {
    alert("Name is required");
    return;
  }

  if (!email.value) {
    alert("Email is required");
    return;
  }

  if (!phone.value) {
    alert("Phone number is required");
    return;
  }

  if (!company.value) {
    alert("Company name is required");
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
}
