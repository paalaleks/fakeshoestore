var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire2efc;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire2efc=a);var r=a("6FYn5");const s=document.getElementById("header");var o=async()=>{try{const e=await fetch("https://calm-hollows-27909.herokuapp.com/api/shoe-hero?populate=*"),t=await e.json();return s.innerHTML="",void(s.innerHTML=`\n    <img class="hero-img" src="${t.data.attributes.shoeHero.data.attributes.formats.large.url}" alt="A shoe is thrown in the air" />\n    <a class="hero-container" href="./productList.html"><div>\n      <h4>\n        All shoes are tested and approved by professional athletes.\n        <br/>\n        See all shoes\n        <i class="fa-solid fa-arrow-right-long"></i>\n      </h4>\n    </div>\n    </a>\n    `)}catch(e){return console.log(e),e}};const i=document.getElementById("featured");var l=async()=>{try{const e=await fetch("https://calm-hollows-27909.herokuapp.com/api/shoes?populate=*"),t=await e.json();return i.innerHTML="",void t.data.forEach(((e,t)=>{t<=2&&(i.innerHTML+=`\n          <a href="./productDetails.html?id=${e.id}">\n            <div class="products-content">\n              <div class="products-img" style="background-image: url(${e.attributes.image.data.attributes.formats.small.url});"></div>\n              <p>${e.attributes.title} <span class="price-tag">$${e.attributes.price}</span></p>\n            </div>\n          </a>\n          `)}))}catch(e){return console.log(e),e}};var d=function(){document.querySelector(".arrow-left");const e=document.querySelector(".search"),t=document.querySelector(".full-screen-message"),n=document.querySelector(".products-container"),a=document.getElementById("header"),r=document.getElementById("xBtn"),s=document.getElementById("searchInput");e.addEventListener("keyup",(async e=>{const i=e.target.value;if(i?(r.style.display="inline",r.addEventListener("click",(()=>{o(),l(),s.value="",r.style.display="none"}))):(o(),l(),r.style.display="none"),i.length>1){const e=await fetch("https://calm-hollows-27909.herokuapp.com/api/shoes?populate=*"),r=(await e.json()).data.filter((e=>e.attributes.title.trim().toLowerCase().includes(i)||e.attributes.textContent.trim().toLowerCase().includes(i)));0==r?(n.innerHTML="",a.innerHTML="",t.style.display="flex"):(t.style.display="none",d=r,a.innerHTML="",n.innerHTML="",d.forEach((e=>{n.innerHTML+=`\n          <a href="./productDetails.html?id=${e.id}">\n            <div class="products-content">\n              <div class="products-img" style="background-image: url(${e.attributes.image.data.attributes.formats.medium.url});"></div>\n              <p>${e.attributes.title} <span class="price-tag">$${e.attributes.price}</span></p>\n            </div>\n          </a>\n          `})))}var d}))};document.getElementById("nav").innerHTML=(0,r.default)(),d(),document.getElementById("cart").innerHTML='\n        <div class="cart-icon">\n          <i class="fa-solid fa-cart-shopping"></i>\n          <span id="cartNum">1</span>\n        </div>\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="38.25"\n          height="10.939"\n          viewBox="0 0 38.25 10.939"\n        >\n          <path\n            id="Path_341"\n            data-name="Path 341"\n            d="M0,8.615A8.062,8.062,0,0,0,1.938,10.5,37.75,37.75,0,0,0,7.262,5.6a12.152,12.152,0,0,0,4.121,4.341l1.913.8a3.053,3.053,0,0,0,2.086-1.14c1.324-1.5,2.624-2.305,3.606-4.05a30.549,30.549,0,0,0,3.827,4.274l1.276.8a2.592,2.592,0,0,0,2.551-.067l.907-.648a55.142,55.142,0,0,1,4.294-4.184s2.428,2.706,3.827,4.652l1.3-.558c2.132-1.05.957-3.737.957-3.737s-1.84-2.236-3.533-4.206L32.923.814c-.466.089-1.08-.536-2.258.268l-1.5,1.1c-1.545,1.342-3.9,3.735-3.9,3.735A50.594,50.594,0,0,0,21.515,1.6L18.988.569a2.509,2.509,0,0,0-1.546.469L16.069,2.224C14.547,4.013,13,5.557,13,5.557,11.26,4.3,11.113,3.1,9.763,1.575L8.954.7A2.5,2.5,0,0,0,5.838.412l-1.1.917A30.618,30.618,0,0,1,0,6.362Z"\n            transform="translate(0 0)"\n            fill="#f0f7f9"\n          />\n        </svg>',document.getElementById("header").innerHTML=o(),document.getElementById("featured").innerHTML=l(),document.getElementById("footer").innerHTML='\n    <footer class="footer">\n    <span> 2022 © Witness the fitness, all rights reserved.</span>\n    </footer>\n    ';
//# sourceMappingURL=index.d06608cc.js.map
