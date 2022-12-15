import "../styles/global.scss";
import { SomethingInCart } from "../components/inCart";
import "../components/cart.scss";
import Nav from "../components/nav.js";
import "../components/nav.scss";
import Footer from "../components/footer.js";
import "../components/footer.scss";
import LeftArrow from "../components/leftArrow.js";

const index = () => {
  (document.getElementById("nav").innerHTML = Nav()),
    (() => {
      document.querySelector(".arrow-left").innerHTML = LeftArrow();
    })();

  SomethingInCart();
  document.getElementById("footer").innerHTML = Footer();
};

// init index
index();
