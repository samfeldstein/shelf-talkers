<script setup>
import { useLogo } from '@/composables/useLogo';

const { setLogo } = useLogo();

// Handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setLogo(reader.result); // Update the shared state and localStorage
    };
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <label class="button default" for="logo-upload">Change Logo</label>
  <input id="logo-upload" type="file" accept="image/*" @change="handleFileUpload" />
</template>

<style lang="scss" scoped>
// Hide default upload button
input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

label {
  // Offset vertically otherwise
  display: inline-block;
  font-weight: inherit;
  text-align: center;
  cursor: pointer;
}
</style>