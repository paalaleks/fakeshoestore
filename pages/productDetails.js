import "../styles/global.scss";
import ProductDetailsSearch from "../js/search/productDetailsSearch.js";
import Nav from "../components/nav.js";
import UpdateCart from "../components/cartIcon.js";
import "../components/nav.scss";
import Footer from "../components/footer.js";
import "../components/footer.scss";
import Details from "../components/details.js";
import "../components/details.scss";
import LeftArrow from "../components/leftArrow.js";

const productDetails = () => {
  (document.getElementById("nav").innerHTML = Nav()),
    ProductDetailsSearch(),
    (() => {
      document.querySelector(".arrow-left").innerHTML = LeftArrow();
    })(),
    (() => {
      document.getElementById("cart").innerHTML = UpdateCart();
    })();

  document.getElementById("details").innerHTML = Details();
  document.getElementById("footer").innerHTML = Footer();
};

// init productDetails
productDetails();
