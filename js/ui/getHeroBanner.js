import { url } from "../settings/api.js";

export function getHeroBanner(promise) {
  const banner = document.querySelector(".hero-banner");
  banner.innerHTML = `<div class="ratio ratio-21x9 my-1 hero__banner" 
                      style = "background-image:  url(${url}${promise.hero_banner.url});" >
                      </div>`;
}
