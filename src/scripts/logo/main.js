import loadLogo from "./loadLogo";
import changeLogo from "./changeLogo";
import closeOptions from "../closeOptions";
import deleteLogo from "./deleteLogo";

const closeButton = document.getElementById("closeLogoBtn");
const deleteButton = document.getElementById("deleteLogo");

loadLogo();
changeLogo();
closeOptions(closeButton);

deleteButton.addEventListener("click", deleteLogo);

document.addEventListener("DOMContentLoaded", () => {
  const logosHidden = localStorage.getItem("logosHidden") === "true";

  if (logosHidden) {
    document.querySelectorAll(".logo").forEach((logo) => logo.remove());
  }
});