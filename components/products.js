import { baseUrl } from "../js/api/api.js";
const productsList = document.getElementById("products");

const Products = async () => {
  try {
    const response = await fetch(`${baseUrl}/shoes?populate=*`);
    const json = await response.json();
    productsList.innerHTML = "";

    json.data.forEach((product, i) => {
      console.log(product.attributes.image.data.attributes.formats.small.url);
      productsList.innerHTML += `
          <a href="./productDetails.html?id=${product.id}">
            <div class="products-content">
              <div class="products-img" style="background-image: url(${product.attributes.image.data.attributes.formats.small.url});"></div>
              <p>${product.attributes.title} <span class="price-tag">$${product.attributes.price}</span></p>
            </div>
          </a>
          `;
    });

    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default Products;
