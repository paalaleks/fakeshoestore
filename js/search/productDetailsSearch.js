import { baseUrl } from "../api/api.js";
import Details from "../../components/details.js";

function Search() {
  const products = document.getElementById("details");
  const search = document.querySelector(".search");
  const productsUrl = baseUrl + "/shoes?populate=*";
  const fullScreenMessage = document.querySelector(".full-screen-message");
  const productsList = document.querySelector(".products-container");
  const xBtn = document.getElementById("xBtn");
  const searchInput = document.getElementById("searchInput");

  search.addEventListener("keyup", async (e) => {
    const searchString = e.target.value;

    // // Load default layout when string is empty //

    if (!searchString) {
      xBtn.style.display = "none";
      Details();
      productsList.innerHTML = "";
    } else {
      xBtn.style.display = "inline";
      xBtn.addEventListener("click", () => {
        searchInput.value = "";
        xBtn.style.display = "none";
        Details();
        productsList.innerHTML = "";
      });
    }

    // Filter //

    if (searchString.length > 1) {
      products.innerHTML = "";
      const response = await fetch(productsUrl);
      const json = await response.json();

      const filteredProducts = json.data.filter((product) => {
        return (
          product.attributes.title
            .trim()
            .toLowerCase()
            .includes(searchString) ||
          product.attributes.textContent
            .trim()
            .toLowerCase()
            .includes(searchString)
        );
      });

      // Empty message

      if (filteredProducts == 0) {
        (function nothingThere() {
          productsList.innerHTML = "";
          fullScreenMessage.style.display = "flex";
        })();
      } else {
        fullScreenMessage.style.display = "none";
        displayProducts(filteredProducts);
      }
    }

    function displayProducts(products) {
      productsList.innerHTML = "";

      products.forEach((product) => {
        productsList.innerHTML += `
          <a href="./productDetails.html?id=${product.id}">
            <div class="products-content">
              <div class="products-img" style="background-image: url(${product.attributes.image.data.attributes.formats.medium.url});"></div>
              <p>${product.attributes.title} <span class="price-tag">$${product.attributes.price}</span></p>
            </div>
          </a>
          `;
      });
    }
  });
}

export default Search;
