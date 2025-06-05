import loadLogo from "./loadLogo";
import changeLogo from "./changeLogo";
import closeOptions from "../closeOptions";
import toggleLogo from "./toggleLogo";

const closeButton = document.getElementById("closeLogoBtn");
const toggleButton = document.getElementById("toggleLogo");

loadLogo();
changeLogo();
closeOptions(closeButton);

toggleButton.addEventListener("click", toggleLogo);

document.addEventListener("DOMContentLoaded", () => {
  const isHidden = localStorage.getItem("logosHidden") === "true";

  document.querySelectorAll(".logo").forEach((logo) => {
    logo.hidden = isHidden;
  });
});

