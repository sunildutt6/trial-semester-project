import { getToken } from "../components/userStorage.js";
import { url } from "../settings/api.js";

export default function deleteProduct(id) {
  const deleteContainer = document.querySelector(".delete-product");
  deleteContainer.innerHTML = `<button type ="button" class= "delete form__info--input form__info--delete ">Delete</button>`;

  const button = document.querySelector(".delete");
  button.addEventListener("click", deleteItem);

  async function deleteItem() {
    const doErase = confirm("Are you sure want to delete ?");
    console.log(doErase);

    if (doErase) {
      const baseUrl = url + "/products/" + id;
      const token = getToken();
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(baseUrl, options);
        const json = await response.json();
        location.href = "/index.html";
      } catch (error) {
        console.log(error);
      }
    }
  }
}
