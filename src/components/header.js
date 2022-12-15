// import { baseUrl } from "../js/api/api.js";
const header = document.getElementById("header");
import hero from "../../../mock-data/hero.json";

const Header = async () => {
  const heroUrl = hero;

  try {
    const response = await fetch(heroUrl);
    const json = await response.json();
    header.innerHTML = "";

    header.innerHTML = `
    <img class="hero-img" src="${json.hero_banner.url}" alt="${json.hero_banner_alt_text}" />
    <a class="hero-container" href="./productList.html"><div>
      <h4>
        All shoes are tested and approved by professional athletes.
        <br/>
        See all shoes
        <i class="fa-solid fa-arrow-right-long"></i>
      </h4>
    </div>
    </a>
    `;

    return;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default Header;
