import { url } from "../settings/api.js";

export function getFeaturedProducts(response) {
  const featureProducts = document.querySelector(".feature__products");
  featureProducts.innerHTML = "";

  response.forEach((product) => {
    if (product.featured) {
      let imageUrl = "";
      if (!product.image_url) {
        imageUrl = url + product.image.formats.medium.url;
      } else {
        imageUrl = product.image_url;
      }

      featureProducts.innerHTML += `<div class="card-md-6 col-lg-4 py-3 feature__container">
                                        <div class= "card-img-top ratio ratio-4x3 feature__products--image" style="background-image:url(${imageUrl})">
                                        </div>
                                        <span class ="feature__container--para">Best Seller</span>
                                        <div class="card-body">
                                        <h4> ${product.title}  </h4>
                                        <h5>Price: $${product.price}</h5>
                                       <a class = "btn btn-white" href="details.html?id=${product.id}">Quick Shop</a>
                                        </div>
                                      `;
    }
  });
}
