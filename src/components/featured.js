// import { baseUrl } from "../js/api/api.js";
import products from "../../../mock-data/data.json";

const productsList = document.getElementById("featured");

const Featured = async () => {
  const productsUrl = products;

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    productsList.innerHTML = "";

    json.forEach((product) => {
      if (product.featured == true) {
        productsList.innerHTML += `
          <a href="./productDetails.html?id=${product.id}">
            <div class="products-content">
              <div class="products-img" style="background-image: url(${product.image.formats.small.url});"></div>
              <p>${product.title} <span class="price-tag">$${product.price}</span></p>
            </div>
          </a>
          `;
      }
    });

    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default Featured;
