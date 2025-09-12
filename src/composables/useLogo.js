import { ref } from 'vue';

const logoSrc = ref('/compshop-logo.svg'); // Default logo

// Check if localStorage is available (client-side only)
if (typeof window !== 'undefined') {
  const savedLogo = localStorage.getItem('logo-src');
  if (savedLogo) {
    logoSrc.value = savedLogo;
  }
}

function setLogo(src) {
  logoSrc.value = src;
  if (typeof window !== 'undefined') {
    localStorage.setItem('logo-src', src);
  }
}

export function useLogo() {
  return { logoSrc, setLogo };
}