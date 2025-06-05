export default function loadLogo() {
  // Load saved logo
  const logos = document.querySelectorAll(".logo");
  const savedLogo = localStorage.getItem("userLogo");
  if (savedLogo) {
    logos.forEach((logo) => {
      logo.src = savedLogo;
    });
  }
}