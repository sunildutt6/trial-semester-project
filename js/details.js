import createMenu from "./admin/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { url } from "./settings/api.js";
import { productDetails } from "./ui/productDetails.js";
const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

createMenu();
if (!id) {
  document.location.href = "/";
}

const productUrl = url + "/products/" + id;

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();
    document.title = details.title;
    productDetails(details);
  } catch (error) {
    displayMessage("error", error, ".products");
  }
})();
