import displayMessage from "../components/displayMessage.js";
import { products, url } from "../settings/api.js";
import createProductMenu from "./createProductMenu.js";
import createMenu from "../admin/createMenu.js";

createMenu();
createProductMenu();
(async function () {
  const featureProducts = document.querySelector(".feature-products");
  const response = await fetch(url + products);
  const json = await response.json();
  console.log(json);
  featureProducts.innerHTML = "";
  json.forEach((product) => {
    let imageUrl = "";
    if (!product.image_url) {
      imageUrl = url + product.image.formats.medium.url;
    } else {
      imageUrl = product.image_url;
    }
    featureProducts.innerHTML += `
    <a class="card-md-6 col-lg-4 py-3" href="editproducts.html?id=${product.id}">
    <div class= "card-img-top ratio ratio-4x3 feature__product--image" style="background-image:url(${imageUrl})"></div>
    <div class="card-body">
    <h4>${product.title}</h4>
    </div>
     </a>`;
  });
})();
