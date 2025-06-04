export default function closeOptionsBox(element) {
  const box = element.closest(".options-box");
  if (box) box.classList.add("hidden");
}