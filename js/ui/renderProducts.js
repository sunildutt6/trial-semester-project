import { products, url } from "../settings/api.js";
export function renderProducts(json) {
  const featureProducts = document.querySelector(".feature-products");

  featureProducts.innerHTML = "";

  json.forEach((product) => {
    let imageUrl = "";
    if (!product.image_url) {
      imageUrl = url + product.image.formats.medium.url;
    } else {
      imageUrl = product.image_url;
    }

    if (product.featured) {
      featureProducts.innerHTML += `<a class="card-md-6 col-lg-4 py-3 feature__container" href="details.html?id=${product.id}">
      <div class= "card-img-top ratio ratio-4x3 feature__products--image" style="background-image:url(${imageUrl})">
      </div>
      <span class ="feature__container--para ">Best Seller</span>
      <div class="card-body">
      <h4>${product.title}</h4>
     <h5>Price: $${product.price}</h5>
      </div>
      </a>
    `;
    } else {
      featureProducts.innerHTML += `<a class="card-md-6 col-lg-4 py-3" href="details.html?id=${product.id}">
                                <div class= "card-img-top ratio ratio-4x3 feature__products--image" style="background-image:url(${imageUrl})"></div>
                                    <div class="card-body">
                                    <h4>${product.title}</h4>
                                    <h5>Price: $${product.price}</h5>
                                    </div>
                                    </a>
                                    `;
    }
  });
}
