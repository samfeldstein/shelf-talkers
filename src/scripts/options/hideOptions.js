export default function hideOptions() {

  // Get close button
  const button = document.getElementById("closeOptionsButton");

  // Run hide on click
  button.addEventListener("click", hide);
}

function hide() {
  // Get options div
  const optionsDiv = document.getElementById("optionsDiv");

  // Hide div
  optionsDiv.classList.add("hidden");
}

function visibleBoxes() {
  const anyVisible = document.querySelector(".options-box:not(.hidden)") !== null;
  return anyVisible;
}
