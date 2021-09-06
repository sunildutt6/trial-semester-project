import { getUser } from "../components/userStorage.js";

export default function createMenu() {
  const { pathname } = document.location;
  const container = document.querySelector(".menu-container");

  const username = getUser();

  let authorisedLink = ` <li class="nav-item ">
    <a class="nav-link mx-5 ${
      pathname === "/login.html" ? "active" : ""
    }" href="login.html">Login <i class="fas fa-sign-in-alt"></i></a>
    </li>`;

  if (username) {
    authorisedLink = `<span class="nav-link"> 🙏🏻 Hello! ${username} 🙏🏻</span>`;
  }

  container.innerHTML = `<img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link ${
              pathname === "/" || pathname === "/index.html" ? "active" : ""
            }"  href="/">Home <i
                    class="fas fa-home"></i></a>
        </li>
        <li class="nav-item">
            <a class="nav-link ${
              pathname === "/products.html" ? "active" : ""
            }" href="products.html">Products</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ${
              pathname === "/cart.html" ? "active" : ""
            }" href="cart.html">Cart <i class="fas fa-shopping-cart"></i></a>
        </li>
        <li class="nav-item">
            <a class="nav-link ${
              pathname === "/add.html" ? "active" : ""
            }" href="add.html">Add Product <i class="fas fa-plus-circle"></i></a>
        </li>
        ${authorisedLink}
    </ul>
</div>`;
}
