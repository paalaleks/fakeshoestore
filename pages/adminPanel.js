import "../styles/global.scss";
import "../components/adminPanelSection.js";
import "../components/adminPanel.scss";
import "../components/common/display-message.scss";
import Footer from "../components/footer.js";
import "../components/footer.scss";
const admin = () => {
  document.getElementById("footer").innerHTML = Footer();
};

// init admin
admin();
