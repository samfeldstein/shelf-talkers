import loadLogo from "./loadLogo";
import changeLogo from "./changeLogo";
import toggleLogo from "./toggleLogo";

const toggleButton = document.getElementById("toggleLogo");

loadLogo();
changeLogo();

toggleButton.addEventListener("click", toggleLogo);

document.addEventListener("DOMContentLoaded", () => {
  const isHidden = localStorage.getItem("logosHidden") === "true";

  document.querySelectorAll(".logo").forEach((logo) => {
    logo.hidden = isHidden;
  });
});
