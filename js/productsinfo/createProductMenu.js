export default function createProductMenu() {
  const productInfo = document.querySelector(".product__info");

  const { pathname } = document.location;
  console.log(pathname);
  productInfo.innerHTML = `<div class="nav">
                            <li class="nav-item">
                            <h3><a class="nav-link ${
                              pathname === "/add.html" ? "active" : ""
                            }"  href="/add.html">Add-New-Product <i class="fas fa-plus-square"></i></a></h3>
                          </li>
                            
                            <li class="nav-item">
                            <h3><a class="nav-link ${
                              pathname === "/showproducts.html" ? "active" : ""
                            }" href="showproducts.html">Edit Product <i class="far fa-edit"></i></a></h3>
                          </li>
                            
                        </div>
                              `;
}
