import "../styles/global.scss";
import Footer from "../components/footer.js";
import "../components/footer.scss";
import "../components/adminForm.scss";
import "../components/common/display-message.scss";
import submitForm from "../components/adminForm.js";

const admin = () => {
  document.getElementById("footer").innerHTML = Footer();
  submitForm();
};

// init admin
admin();
