import closeOptions from "../closeOptions";

export default function changeLogo() {
  const input = document.getElementById("logoUpload");

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
    closeOptions();
  });
}

function apply(url) {
  const logos = document.querySelectorAll(".logo");

  // Apply url to all logo elements
  logos.forEach((logo) => {
    logo.src = url;
  });
}