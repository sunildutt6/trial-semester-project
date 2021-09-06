import createMenu from "./admin/createMenu.js";
import { getShoppingCart } from "./components/shoppingCartStorage.js";
const cartProducts = getShoppingCart();
const featureProducts = document.querySelector(".feature__products");
const totalPrice = document.querySelector(".total");

createMenu();

if (!cartProducts.length) {
  featureProducts.innerHTML = `<h2 class= "my-2">Your cart is empty.😞😞😞</h2>`;
}

let sum = 0;
cartProducts.forEach((products) => {
  featureProducts.innerHTML += `
    <div class="card product" >
    <a class="card-img-top ratio ratio-4x3 feature--image" href="details.html?id=${products.id}" style="background-image:url(${products.image})"></a>
    <h5 class="mt-2">${products.title}</h5>
    <p class="card-text mb-2">Price: $${products.price}</p>
    </div>`;

  sum = sum + parseFloat(products.price, 10);
  totalPrice.innerHTML = `<h2>Total: ${sum} </h2>`;
});
