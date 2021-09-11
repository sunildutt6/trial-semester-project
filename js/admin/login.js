import displayMessage from "../components/displayMessage.js";
import { saveToken, saveUser } from "../components/userStorage.js";
import { url } from "../settings/api.js";
import createMenu from "./createMenu.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const messageContainer = document.querySelector(".message-container");

createMenu();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  messageContainer.innerHTML = "";
  const userValue = username.value.trim();
  const passValue = password.value.trim();
  if (userValue.length === 0 || passValue.length === 0) {
    return displayMessage("error", "Wrong Inputs", ".message-container");
  }
  loginAccess(userValue, passValue);
}

async function loginAccess(username, password) {
  const baseUrl = url + "/auth/local";
  const data = JSON.stringify({ identifier: username, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(baseUrl, options);
    const json = await response.json();
    if (json.user) {
      // displayMessage("success", "User" + " " + json.user.role.type, ".message-container");
      saveToken(json.jwt);
      saveUser(json.user);
      location.href = "/add.html";
    }
    if (json.error) {
      displayMessage(
        "warning",
        json.data[0].messages[0].message,
        ".message-container"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
