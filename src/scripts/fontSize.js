// Get font size input
const input = document.getElementById("font-size-input");

const showButton = document.getElementById("fontSizeButton");
showButton.addEventListener("click", () => {
  input.focus();
})

// Listen for user input
input.addEventListener("input", updatePrintSize);

// Open print preview on Enter
input.addEventListener("keydown", onEnter);

function updatePrintSize() {
  const value = input.value;
  document.querySelectorAll(".card").forEach((card) => {
    card.style.setProperty("--print-size", `${value}px`);
  });
}

function onEnter(event) {
  if (event.key === "Enter") {
    window.print();
  }
}