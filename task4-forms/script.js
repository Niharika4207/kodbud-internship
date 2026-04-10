let form = document.getElementById("form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let resume = document.getElementById("resume");

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[0-9]{10}$/;

/* REAL-TIME */
name.addEventListener("input", () => {
  document.getElementById("nameError").innerText =
    name.value.trim() === "" ? "Name required" : "";
});

email.addEventListener("input", () => {
  if (email.value.trim() === "") {
    emailError.innerText = "Email required";
  } else if (!email.value.match(emailPattern)) {
    emailError.innerText = "Invalid email";
  } else {
    emailError.innerText = "";
  }
});

phone.addEventListener("input", () => {
  if (!phone.value.match(phonePattern)) {
    phoneError.innerText = "Enter 10-digit number";
  } else {
    phoneError.innerText = "";
  }
});

message.addEventListener("input", () => {
  messageError.innerText =
    message.value.trim() === "" ? "Message required" : "";
});

resume.addEventListener("change", () => {
  let file = resume.files[0];

  if (!file) {
    resumeError.innerText = "Upload resume";
  } else if (file.type !== "application/pdf") {
    resumeError.innerText = "Only PDF allowed";
  } else {
    resumeError.innerText = "";
  }
});

/* SUBMIT */
form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (
    name.value.trim() !== "" &&
    email.value.match(emailPattern) &&
    phone.value.match(phonePattern) &&
    message.value.trim() !== "" &&
    resume.files[0] &&
    resume.files[0].type === "application/pdf"
  ) {
    document.getElementById("successMsg").innerText =
      "Form submitted successfully!";
    form.reset();
  }
});
