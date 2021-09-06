import { product } from "../settings/api.js";

export function saveShoppingCart(productToSave) {
  localStorage.setItem(product, JSON.stringify(productToSave));
}

export function getShoppingCart() {
  const currentProductList = localStorage.getItem(product);
  if (!currentProductList) {
    return [];
  }
  return JSON.parse(currentProductList);
}
