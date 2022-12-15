import "../styles/global.scss";
import Nav from "../components/nav.js";
import UpdateCart from "../components/cartIcon.js";
import "../components/nav.scss";
import Header from "../components/header.js";
import "../components/header.scss";
import Featured from "../components/featured.js";
import Footer from "../components/footer.js";
import "../components/footer.scss";
import Search from "../js/search/indexSearch.js";

//////////////////////
// search functions //
//////////////////////

const index = () => {
  (document.getElementById("nav").innerHTML = Nav()),
    Search(),
    (() => {
      document.getElementById("cart").innerHTML = UpdateCart();
    })();
  document.getElementById("header").innerHTML = Header();
  document.getElementById("featured").innerHTML = Featured();
  document.getElementById("footer").innerHTML = Footer();
};

// init index
index();
