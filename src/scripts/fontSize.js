// Get font size input
const input = document.getElementById("font-size-input");

// Listen for user input
input.addEventListener("input", updatePrintSize);

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