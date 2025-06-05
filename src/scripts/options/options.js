import close from "../close";
import open from "../open";

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