import open from "../utils/open";
import close from "../utils/close";

// Handle open buttons
document.querySelectorAll("[data-button-id]").forEach((button) => {
  const divId = button.dataset.divId;
  const target = document.getElementById(divId);

  // Open on click
  button.addEventListener("click", () => {
    open(target);
  });
});

// Handle done buttons
document.querySelectorAll(".done").forEach((doneButton) => {
  doneButton.addEventListener("click", () => {
    const box = doneButton.closest(".options-box");
    close(box);
  });
});