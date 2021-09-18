import createMenu from "./admin/createMenu.js";

createMenu();
const messageSuccess = document.querySelector(".contact__form--message");
const fName = document.querySelector("#Fname");
const firstNameError = document.querySelector("#fNameError");

const lName = document.querySelector("#Lname");
const lastNameError = document.querySelector("#lNameError");

const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#floatingTextarea2");
const messageError = document.querySelector("#messageError");

const button = document.querySelector(".form-button");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  if (lengthCheck(fName.value, 0)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (lengthCheck(lName.value, 0)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (lengthCheck(subject.value, 3)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (lengthCheck(message.value, 19)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (
    lengthCheck(lName.value, 0) &&
    lengthCheck(fName.value, 0) &&
    lengthCheck(subject.value, 3) &&
    lengthCheck(message.value, 19) &&
    validateEmail(email.value)
  ) {
    messageSuccess.innerHTML = `<h4>Thank you for contacting us😀...</h4>`;
    form.reset();
    form.style.display = "none";
  } else {
    messageSuccess.innerHTML = "";
  }
}

function lengthCheck(value, length) {
  if (value.trim().length > length) {
    return true;
  }
  return false;
}
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
