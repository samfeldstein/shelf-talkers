import processFontInput from "./processFontInput";
import injectFont from "./injectFont";
import close from "./close";

export default function loadFont() {
  // Load font
  loadSavedFont()
  changeFont()
}

function loadSavedFont() {
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("googleFontLink");
    if (saved) injectFont(saved);
  })
}

function changeFont() {
  const textarea = document.getElementById("fontLinkInput");
  textarea.addEventListener("keydown", (e) => {
    // On enter...
    if (e.key === "Enter") {
      e.preventDefault();
      processFontInput();

      // Close
      const optionsDiv = document.querySelector("#optionsDiv");
      close(optionsDiv);
    }
  })
}