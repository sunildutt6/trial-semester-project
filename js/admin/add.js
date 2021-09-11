import { products, url } from "../settings/api.js";
import displayMessage from "../components/displayMessage.js";
import createMenu from "./createMenu.js";
import { getToken } from "../components/userStorage.js";
import createProductMenu from "../productsinfo/createProductMenu.js";

const token = getToken();
if (!token) {
  location.href = "index.html";
}

createMenu();
createProductMenu();
const message = document.querySelector(".message-container");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const featured = document.querySelector("#featured");
const image = document.querySelector("#image");
const form = document.querySelector("form");
const description = document.querySelector("#floatingTextarea2");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";
  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value.trim());
  const featuredValue = featured.value.trim();
  const imageValue = image.value;
  const descriptionValue = description.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    featuredValue.length === 0 ||
    imageValue === 0 ||
    descriptionValue === 0
  ) {
    return displayMessage(
      "warning",
      "Please fill valid inputs",
      ".message-container"
    );
  }
  addProduct(
    titleValue,
    priceValue,
    featuredValue,
    imageValue,
    descriptionValue
  );
}

async function addProduct(title, price, featured, image, description) {
  const baseUrl = url + products;

  const data = JSON.stringify({
    title: title,
    price: price,
    featured: featured,
    image_url: image,
    description: description,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(baseUrl, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage(
        "success",
        "Successfully created product",
        ".message-container"
      );
      form.reset();
    }

    if (json.error) {
      displayMessage("warning", json.message, ".message-container");
    }
  } catch (error) {
    displayMessage("error", "An error occured", ".message-container");
  }
}
