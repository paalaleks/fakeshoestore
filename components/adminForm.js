import displayMessage from "./common/displayMessage.js";
import { baseUrl } from "../js/api/api.js";
import { saveUser, saveToken } from "../js/localstorage/localstorage.js";
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const messageContainer = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  messageContainer.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Invalid input", ".message-container");
  }

  doLogin(usernameValue, passwordValue);

  async function doLogin(username, password) {
    const url = baseUrl + "/auth/local";
    const data = JSON.stringify({ identifier: username, password: password });
    const options = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (json.user) {
        location.href = "/adminPanel.html";
        saveToken(json.jwt);
        saveUser(json.user);
      }

      if (json.error) {
        displayMessage(
          "warning",
          "Invalid login credentials",
          ".message-container"
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default submitForm;
