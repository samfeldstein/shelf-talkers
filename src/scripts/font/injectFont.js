// Inject font
export default function injectFont(href) {
  // Remove existing font links
  document.querySelectorAll('link[rel="stylesheet"]').forEach((l) => {
    if (l.href.includes("fonts.googleapis.com")) l.remove();
  });

  // If link already exists, do nothing
  if (document.querySelector(`link[href="${href}"]`)) return;

  // Build the <link> element and put it in the <head>
  const linkEl = document.createElement("link");
  linkEl.rel = "stylesheet";
  linkEl.href = href;
  document.head.appendChild(linkEl);

  // Apply font to cards
  const match = href.match(/family=([^:&"]+)/);
  if (!match) return;
  const fontName = match[1].split(":")[0].replace(/\+/g, " ");
  const container = document.getElementById("cardContainer");
  container.style.fontFamily = `'${fontName}'`;
}