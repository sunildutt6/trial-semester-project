import { renderProducts } from "./renderProducts.js";

export function searchProducts(json) {
  const search = document.querySelector(".search");

  search.onkeyup = function () {
    const searchValue = this.value.trim().toLowerCase();
    const filterProducts = json.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    renderProducts(filterProducts);
  };
}
