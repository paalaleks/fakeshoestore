import "../styles/global.scss";
import Nav from "../components/nav.js";
import UpdateCart from "../components/cartIcon.js";
import "../components/nav.scss";
import Products from "../components/products";
import "../components/products.scss";
import Footer from "../components/footer.js";
import "../components/footer.scss";
import ProductListSearch from "../js/search/productListSearch.js";
import LeftArrow from "../components/leftArrow.js";

// console.log(LeftArrow());

const ProductList = () => {
  (document.getElementById("nav").innerHTML = Nav()),
    (ProductListSearch(),
    () => {
      document.querySelector(".arrow-left").innerHTML = LeftArrow();
    })(),
    (() => {
      document.getElementById("cart").innerHTML = UpdateCart();
    })();

  document.getElementById("products").innerHTML = Products();
  document.getElementById("footer").innerHTML = Footer();
};

// init Products
ProductList();
