export default function deleteLogo() {

  document.querySelectorAll(".logo").forEach((logo) => logo.classList.add("hidden"));

  localStorage.setItem("logosHidden", "true");
}
