import { baseUrl } from "../js/api/api.js";
const header = document.getElementById("header");

const Header = async () => {
  try {
    const response = await fetch(`${baseUrl}/shoe-hero?populate=*`);
    const json = await response.json();

    header.innerHTML = "";

    header.innerHTML = `
    <img class="hero-img" src="${json.data.attributes.shoeHero.data.attributes.formats.large.url}" alt="A shoe is thrown in the air" />
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
