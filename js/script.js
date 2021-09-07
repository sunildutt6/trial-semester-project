import createMenu from "./admin/createMenu.js";
import displayMessage from "./components/displayMessage.js";
import { home, products, url } from "./settings/api.js";
import { getFeaturedProducts } from "./ui/getFeaturedProducts.js";
import { getHeroBanner } from "./ui/getHeroBanner.js";

createMenu();

//display hero banner with async function
(async function () {
  try {
    const response = await fetch(url + home);
    const promise = await response.json();
    getHeroBanner(promise);
  } catch (error) {
    displayMessage("error", error, ".hero-banner");
  }
})();

//display featured product using async function

(async function () {
  try {
    const promise = await fetch(url + products);
    const response = await promise.json();

    getFeaturedProducts(response);
  } catch (error) {
    displayMessage("error", error, ".feature__products");
  }
})();
