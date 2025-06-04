import hideOptions from "./hideOptions";

click();
hideOptions();

// Define button logic
function click() {
  // Get button
  const button = document.getElementById("optionsButton");

  // Run show options on click
  button.addEventListener("click", show);
}

// Define show options logic
function show() {
  // Get options div
  const optionsDiv = document.getElementById("optionsDiv");
  // Toggle hidden attr on options div
  optionsDiv.classList.remove("hidden");
}