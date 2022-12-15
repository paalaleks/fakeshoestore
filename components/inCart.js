import { SumTotal } from "../js/sumTotal";
import { saveToStorage, getFromStorage } from "../js/localstorage/localstorage";

const cartList = document.getElementById("cart-container");

let getCart = getFromStorage("inCart");
// console.log(getCart);

export const NothingInCart = () => {
  const emptyArray = `
  <div class="cart-cards">
  <h2>Nothing in your cart yet..</h2>
  </div>
  `;
  return emptyArray;
};

export const SomethingInCart = () => {
  getCart.forEach((elm) => {
    console.log(elm);
    cartList.innerHTML += `
    <div class="cart-cards">
      <i class="cartX fa-solid fa-xmark" id=cartX data-id=${elm.currentId}></i>
      <a href="">
        <div class="cart-img" style="background-image: url(${elm.currentUrl});"></div>
        <div>
          <h2>${elm.currentTitle}</h2>  
          <h2>$${elm.currentPrice}</h2>  
        </div>
      </a>
    </div>
    `;
  });
  xClick();
};

function xClick() {
  const allcards = cartList.querySelectorAll(".cart-cards .cartX");

  allcards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const deleteTarget = e.target.dataset.id;

      const newCartList = getCart.filter((item) => {
        // console.log(item);
        if (deleteTarget !== item.currentId) {
          return true;
        }
      });
      console.log(newCartList);

      getCart = newCartList;

      saveToStorage("inCart", getCart);

      location.reload();
      SomethingInCart();
    });
  });
}

SumTotal(getCart);
