import close from "../utils/close";
import open from "../utils/open";

// Get menu
const optionsMenu = document.getElementById("optionsDiv")

// Open/close 
openMenu()
closeMenu()

function closeMenu() {
  const closeButton = document.getElementById("closeOptionsButton")

  closeButton.addEventListener("click", () => {
    close(optionsMenu)
  })
}

function openMenu() {
  // Open
  const openButton = document.getElementById("showOptionsButton");

  openButton.addEventListener("click", () => {
    open(optionsMenu)
  })
}