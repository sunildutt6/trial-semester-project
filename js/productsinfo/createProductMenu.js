export default function createProductMenu() {
  const productInfo = document.querySelector(".product__info");

  const { pathname } = document.location;
  console.log(pathname);
  productInfo.innerHTML = `<div class="nav  mt-3">
                            <li class="nav-item  mx-5">
                            <h4><a class="nav-link ${
                              pathname === "/add.html" ? "active" : ""
                            }"  href="/add.html">Add-New-Product <i class="fas fa-plus-square"></i></a></h4> 
                          </li>
                            
                            <li class="nav-item  mx-5">
                            <h4><a class="nav-link ${
                              pathname === "/showproducts.html" ? "active" : ""
                            }" href="showproducts.html">Edit Product <i class="far fa-edit"></i></a></h4>
                          </li>
                            
                        </div>
                              `;
}
