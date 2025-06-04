import loadFont from "./loadFont";
import processFontInput from "./processFontInput";
import close from "./closeOptionsBox";

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
if (doneButton) {
  doneButton.addEventListener("click", () => {
    processFontInput();
    close(doneButton);
  });
}