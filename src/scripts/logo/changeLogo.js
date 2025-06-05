import close from "../utils/close";

export default function changeLogo() {
  const input = document.getElementById("logoUpload");

  clickLabel(input)

  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {

      const dataURL = e.target.result;

      apply(dataURL);

      // Save to localStorage
      localStorage.setItem("userLogo", dataURL);
    };
    reader.readAsDataURL(file);

    // Close options menu
    const options = document.getElementById("optionsDiv")
    close(options)
  });
}

function apply(url) {
  const logos = document.querySelectorAll(".logo");

  // Apply url to all logo elements
  logos.forEach((logo) => {
    logo.src = url;
  });
}

// Treat label as button
function clickLabel(element) {
  const label = document.getElementById("logoUploadLabel")

  label.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      element.click();
    }
  });
}