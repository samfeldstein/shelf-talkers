// Define button logic
export default function showOptions() {

  // Get button
  const button = document.getElementById("showOptionsButton");

  // Run show on click
  button.addEventListener("click", show);
}

// Define show options logic
function show() {
  // Get options div
  const optionsDiv = document.getElementById("optionsDiv");
  // Toggle hidden attr on options div
  optionsDiv.classList.remove("hidden");
}