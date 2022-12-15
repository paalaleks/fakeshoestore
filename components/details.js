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
  // const productsUrl = baseUrl + "/shoes/" + id;

  try {
    const response = await fetch(`${baseUrl}/shoes/${id}?populate=image`);
    const json = await response.json();

    products.innerHTML = `
    <div class="single-product-content">
      <div class="single-product-img"><div style="background-image: url(${json.data.attributes.image.data.attributes.formats.medium.url});"></div></div>
      <div class="single-product-text-container">
        <div class="single-product-text">
            <h2>${json.data.attributes.title}</h2>
            <p>${json.data.attributes.textContent}</p>
        </div>
        <div class="single-product-buttons">
            <p>$${json.data.attributes.price}</p>
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
    storeLocally(
      json.data.attributes.image.data.attributes.formats.medium.url,
      json.data.attributes.title,
      json.data.attributes.textContent,
      json.data.attributes.price,
      id
    );
    Count();

    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

function storeLocally(imageUrl, title, textContent, price, id) {
  const cartList = getFromStorage("inCart");

  document.getElementById("buyBtn").addEventListener("click", () => {
    const currentProduct = {
      currentUrl: imageUrl,
      currentTitle: title,
      currentTextContent: textContent,
      currentPrice: price,
      currentId: id,
    };
    cartList.push(currentProduct);

    saveToStorage("inCart", cartList);
  });
}

export default Details;
