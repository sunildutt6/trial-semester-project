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

      featureProducts.innerHTML += `<div class="card-md-6 col-lg-4">
                                        <div class= "card-img-top ratio ratio-4x3 feature--image" style="background-image:url(${imageUrl})"></div>
                                        <div class="card-body d-flex justify-content-between"> 
                                        <h5>${product.title}</h5>
                                        <i class="far fa-star fa-2x"></i>
                                        </div>
                                      `;
    }
  });
}
