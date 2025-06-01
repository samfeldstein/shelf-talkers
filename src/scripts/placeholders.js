function updatePlaceholders() {
  document.querySelectorAll("[contenteditable]").forEach((el) => {
    const isEmpty = el.textContent.trim() === "";
    el.classList.toggle("placeholder", isEmpty);
  });
}

// Run on load
updatePlaceholders();

// Update on input
document.addEventListener("input", (e) => {
  if (e.target.matches("[contenteditable]")) {
    updatePlaceholders();
  }
});