import { ref } from 'vue';

const logoSrc = ref('/compshop-logo.svg'); // Default logo
const showLogo = ref(true); // Shared state for logo visibility

// Check if localStorage is available (client-side only)
if (typeof window !== 'undefined') {
  const savedLogo = localStorage.getItem('logo-src');
  if (savedLogo) {
    logoSrc.value = savedLogo;
  }

  const savedShowLogo = localStorage.getItem('show-logo');
  if (savedShowLogo !== null) {
    showLogo.value = JSON.parse(savedShowLogo);
  }
}

function setLogo(src) {
  logoSrc.value = src;
  if (typeof window !== 'undefined') {
    localStorage.setItem('logo-src', src);
  }
}

function toggleShowLogo() {
  showLogo.value = !showLogo.value;
  if (typeof window !== 'undefined') {
    localStorage.setItem('show-logo', JSON.stringify(showLogo.value));
  }
}

export function useLogo() {
  return { logoSrc, setLogo, showLogo, toggleShowLogo };
}