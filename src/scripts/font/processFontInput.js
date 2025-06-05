import injectFont from "./injectFont";

export default function processFontInput() {
  const textareaEl = document.getElementById("fontLinkInput");
  if (!textareaEl) return;

  const raw = textareaEl.value.trim();
  if (!raw) return;

  const doc = new DOMParser().parseFromString(raw, "text/html");
  const link = doc.querySelector(
    'link[rel="stylesheet"][href*="fonts.googleapis.com"]',
  );
  if (!link) return;

  const href = link.href;
  localStorage.setItem("googleFontLink", href);
  injectFont(href);
  textareaEl.value = "";
}