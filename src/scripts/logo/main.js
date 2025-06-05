import loadLogo from "./loadLogo";
import changeLogo from "./changeLogo";
import closeOptions from "../closeOptions";

const closeButton = document.getElementById("closeLogoBtn");

loadLogo();
changeLogo();
closeOptions(closeButton);