import { clearStorage } from "../components/userStorage.js";

export default function signoutButton() {
  const button = document.querySelector("button.logout");
  if (button) {
    button.onclick = function () {
      const signOut = confirm("Are you sure ?");
      if (signOut) {
        clearStorage();
        location.href = "cart.html";
      }
    };
  }
}
