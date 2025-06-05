export default function toggleLogo() {
  const logos = document.querySelectorAll(".logo");
  if (logos.length === 0) return;

  // Check current state using the first logo
  const currentlyHidden = logos[0].hidden;

  // Toggle all logos to the opposite state
  logos.forEach((logo) => {
    logo.hidden = !currentlyHidden;
  });

  // Save the new state
  localStorage.setItem("logosHidden", (!currentlyHidden).toString());
}
