import { baseUrl } from "../api/api.js";
import Header from "../../components/header.js";
import Featured from "../../components/featured.js";

function Search() {
  const arrowLeft = document.querySelector(".arrow-left");
  const search = document.querySelector(".search");
  const productsUrl = baseUrl + "/products";
  const fullScreenMessage = document.querySelector(".full-screen-message");
  const productsList = document.querySelector(".products-container");
  const header = document.getElementById("header");
  const xBtn = document.getElementById("xBtn");
  const searchInput = document.getElementById("searchInput");

  search.addEventListener("keyup", async (e) => {
    const searchString = e.target.value;

    // // Load default layout when string is empty //

    if (!searchString) {
      Header();
      Featured();
      xBtn.style.display = "none";
    } else {
      xBtn.style.display = "inline";
      xBtn.addEventListener("click", () => {
        Header();
        Featured();
        searchInput.value = "";
        xBtn.style.display = "none";
      });
    }

    // Filter //

    if (searchString.length > 1) {
      const response = await fetch(productsUrl);
      const json = await response.json();

      const filteredProducts = json.filter((product) => {
        return (
          product.title.trim().toLowerCase().includes(searchString) ||
          product.description.trim().toLowerCase().includes(searchString)
        );
      });

      // Empty message

      if (filteredProducts == 0) {
        (function nothingThere() {
          productsList.innerHTML = "";
          header.innerHTML = "";
          fullScreenMessage.style.display = "flex";
        })();
      } else {
        fullScreenMessage.style.display = "none";
        displayProducts(filteredProducts);
      }
    }

    function displayProducts(products) {
      header.innerHTML = "";
      productsList.innerHTML = "";

      products.forEach((product) => {
        productsList.innerHTML += `
          <a href="./productDetails.html?id=${product.id}">
            <div class="products-content">
              <div class="products-img" style="background-image: url(${baseUrl}${product.image.formats.medium.url});"></div>
              <p>${product.title} <span class="price-tag">$${product.price}</span></p>
            </div>
          </a>
          `;
      });
    }
  });
}

export default Search;
