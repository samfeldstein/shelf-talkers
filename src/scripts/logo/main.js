import loadLogo from "./loadLogo";
import changeLogo from "./changeLogo";
import closeOptions from "../closeOptions";
import deleteLogo from "./deleteLogo";
import showLogo from "./showLogo";

const closeButton = document.getElementById("closeLogoBtn");
const deleteButton = document.getElementById("deleteLogo");
const showButton = document.getElementById("showLogo");

loadLogo();
changeLogo();
closeOptions(closeButton);

deleteButton.addEventListener("click", deleteLogo);
showButton.addEventListener("click", showLogo);

document.addEventListener("DOMContentLoaded", () => {
  const logosHidden = localStorage.getItem("logosHidden") === "true";

  if (logosHidden) {
    document.querySelectorAll(".logo").forEach((logo) => logo.remove());
  }
});
