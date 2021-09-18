import createMenu from "./admin/createMenu.js";
import { getShoppingCart } from "./components/shoppingCartStorage.js";
const cartProducts = getShoppingCart();
const featureProducts = document.querySelector(".feature__products");
const totalPrice = document.querySelector(".total");
const btnCart = document.querySelector(".btn-cart");
console.log(btnCart);

createMenu();

if (!cartProducts.length) {
  featureProducts.innerHTML = `<p class= "my-3">Your cart is empty.😞😞😞</p>`;
  btnCart.style.display = "none";
} else {
  featureProducts.innerHTML = `<p class="my-3">😀 You have selected the following products...😀</p>`;
}

let sum = 0;

cartProducts.forEach((products) => {
  featureProducts.innerHTML += `
      <div class="card-md-4 col-lg-3 py-3 card product-cart" >
    <a class="card-img-top ratio ratio-4x3 feature__product--image" href="details.html?id=${products.id}" style="background-image:url(${products.image})"></a>
    <h5 class="mt-2">${products.title}</h5>
    <h5>Price: $${products.price}</h5>
    </div>`;

  sum = sum + parseFloat(products.price, 10);
  totalPrice.innerHTML = `<h3 class = "my-2">Total: $ ${sum} </h3>`;
});
