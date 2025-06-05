import loadFont from "./loadFont";
import processFontInput from "./processFontInput";

// Focus textarea on open
const showButton = document.getElementById("customFontBtn");
showButton?.addEventListener("click", () => {
  const textarea = document.getElementById("fontLinkInput");
  textarea?.focus();
});

loadFont();
processFontInput();

// Handle Done button click
const doneButton = document.querySelector(".done");
doneButton.addEventListener("click", () => {
  // Process input
  processFontInput();
});