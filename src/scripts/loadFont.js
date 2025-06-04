import close from "./closeOptionsBox";
import processFontInput from "./processFontInput";
import injectFont from "./injectFont";

export default function loadFont() {
  // Load font
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("googleFontLink");
    if (saved) injectFont(saved);

    const textarea = document.getElementById("fontLinkInput");
    if (textarea) {
      textarea.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
          e.preventDefault();
          processFontInput();
          close(textarea);
        }
      });
    }
  });
}
