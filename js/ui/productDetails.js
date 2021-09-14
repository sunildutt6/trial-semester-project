import {
  getShoppingCart,
  saveShoppingCart,
} from "../components/shoppingCartStorage.js";
import { url } from "../settings/api.js";

export function productDetails(details) {
  const products = document.querySelector(".products");

  let cssClass = "added";
  const cartProducts = getShoppingCart();
  const doesProductExist = cartProducts.find(
    (products) => parseInt(products.id) === details.id
  );

  if (doesProductExist) {
    cssClass = "remove";
  }

  let imageUrl = "";
  if (!details.image_url) {
    imageUrl = url + details.image.formats.large.url;
  } else {
    imageUrl = details.image_url;
  }
  console.log(imageUrl);

  products.innerHTML = `
    <h3>${details.title}</h3>
    <div class="ratio ratio-21x9 my-3 product--image"
    style = "background-image: url(${imageUrl});" ></div>
    <h4>Product-description:</h4>
    <p> ${details.description}</p>
    <h5 class="product--price">Price: $${details.price}</h5>
    <button class= "buttonToCart ${cssClass} product--price" data-id="${details.id}" data-price="${details.price}" data-title = "${details.title}" data-image ="${imageUrl}">Add to Cart</button>
    `;

  const button = document.querySelector(".buttonToCart");
  console.log(button);
  button.addEventListener("click", AddedToCart);
}

function AddedToCart() {
  this.classList.toggle("added");
  this.classList.toggle("remove");

  const id = this.dataset.id;
  const price = this.dataset.price;
  const title = this.dataset.title;
  const image = this.dataset.image;

  const currentShoppingCart = getShoppingCart();
  const productExist = currentShoppingCart.find((cart) => cart.id === id);
  if (!productExist) {
    const product = { id, title, price, image };
    currentShoppingCart.push(product);
    saveShoppingCart(currentShoppingCart);
  } else {
    const newShoppingCart = currentShoppingCart.filter(
      (cart) => cart.id !== id
    );
    saveShoppingCart(newShoppingCart);
  }
}
