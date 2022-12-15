import { baseUrl } from "../js/api/api.js";
import Count from "../js/count.js";
import {
  saveToStorage,
  getFromStorage,
} from "../js/localstorage/localstorage.js";

const products = document.getElementById("details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const Details = async () => {
  const productsUrl = baseUrl + "/products/" + id;

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    // console.log(json);

    products.innerHTML = `
    <div class="single-product-content">
      <div class="single-product-img"><div style="background-image: url(${baseUrl}${json.image.formats.medium.url});"></div></div>
      <div class="single-product-text-container">
        <div class="single-product-text">
            <h2>${json.title}</h2>
            <p>${json.description}</p>
        </div>
        <div class="single-product-buttons">
            <p>$${json.price}</p>
            <div>
              <button id="dec" class="incDec">-</button>
              <span id="totalClicks" class="totalClicks">1</span>
              <button id="inc" class="incDec">+</button>
            </div>
            <button id="buyBtn" class="button-1">Buy now</button>
        </div>
      </div>
    </div>
    `;
    storeLocally(json.image.formats.medium.url, json.title, json.price, id);
    Count();

    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

function storeLocally(url, title, price, id) {
  const cartList = getFromStorage("inCart");

  document.getElementById("buyBtn").addEventListener("click", () => {
    const currentProduct = {
      currentUrl: url,
      currentTitle: title,
      currentPrice: price,
      currentId: id,
    };
    cartList.push(currentProduct);

    saveToStorage("inCart", cartList);
  });
}

export default Details;
