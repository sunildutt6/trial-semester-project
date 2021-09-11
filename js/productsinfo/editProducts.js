import { url } from "../settings/api.js";
import displayMessage from "../components/displayMessage.js";
import createMenu from "../admin/createMenu.js";
import createProductMenu from "./createProductMenu.js";
import { getToken } from "../components/userStorage.js";
import deleteProduct from "./deleteProduct.js";

const token = getToken();
if (!token) {
  location.href = "index.html";
}
createMenu();
createProductMenu();
const queryStrings = document.location.search;
const params = new URLSearchParams(queryStrings);
const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = url + "/products/" + id;

const message = document.querySelector(".message-container");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const featured = document.querySelector("#featured");
const image = document.querySelector("#image");
const form = document.querySelector("form");
const description = document.querySelector("#floatingTextarea2");
const loader = document.querySelector(".loading");
const inputId = document.querySelector("#id");

(async function () {
  try {
    const response = await fetch(productUrl);
    const editJson = await response.json();

    title.value = editJson.title;
    price.value = editJson.price;
    featured.value = editJson.featured;
    image.value = editJson.image_url;
    description.value = editJson.description;
    inputId.value = editJson.id;
    deleteProduct(editJson.id);
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = "none";
    form.style.display = "block";
  }
})();

form.addEventListener("submit", updateForm);
function updateForm(event) {
  event.preventDefault();
  message.innerHTML = "";
  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value.trim());
  const featuredValue = featured.value.trim();
  const imageValue = image.value;
  const descriptionValue = description.value.trim();
  const idValue = inputId.value;

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
  updateProducts(
    titleValue,
    priceValue,
    featuredValue,
    imageValue,
    descriptionValue,
    idValue
  );
}

async function updateProducts(title, price, featured, image, description, id) {
  const baseUrl = url + "/products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    featured: featured,
    image_url: image,
    description: description,
    id: id,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(baseUrl, options);
    const json = await response.json();
    console.log(json);
    if (json.updated_at) {
      displayMessage("success", "Updated Product", ".message-container");
    }
    if (json.error) {
      displayMessage("error", "Unauthorise", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
