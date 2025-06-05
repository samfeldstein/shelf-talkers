import hide from "../hide";
import showOptions from "./showOptions";

// Handle close button
const closeButton = document.getElementById("closeOptionsButton")

closeButton.addEventListener("click", () => {
  const optionsMenu = document.getElementById("optionsDiv")
  hide(optionsMenu)
})

showOptions()