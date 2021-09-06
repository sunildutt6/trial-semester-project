import createMenu from "./admin/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { products, url } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";

createMenu();

(async function () {
  try {
    const response = await fetch(url + products);
    const json = await response.json();
    searchProducts(json);
    renderProducts(json);
  } catch (error) {
    displayMessage("error", error, ".feature__products");
  }
})();
