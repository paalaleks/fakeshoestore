import { getUsername, getToken } from "../js/localstorage/localstorage";
import displayMessage from "./common/displayMessage";
import { baseUrl } from "../js/api/api.js";
const loggedIn = document.querySelector(".logged-in");

const username = getUsername();

if (username) {
  loggedIn.innerHTML = `<span>Hi, ${username}!</span>`;
}

const form = document.querySelector(".product-upload-container");
const message = document.querySelector(".message-container");
const fileUpload = document.querySelector("#fileUpload");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  if (
    nameValue.length === 0 ||
    priceValue.length === 0 ||
    descriptionValue.length === 0 ||
    isNaN(priceValue)
  ) {
    return displayMessage(
      "warning",
      "Please fill out the form",
      ".message-container"
    );
  }

  addProduct(nameValue, priceValue, descriptionValue);
}

async function addProduct(name, price, description) {
  const url = baseUrl + "/products";

  const data = JSON.stringify({
    name: name,
    price: price,
    description: description,
  });

  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
