<script setup>
import { ref } from 'vue';

const logoSrc = ref('');

// Handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      logoSrc.value = reader.result; // Save the base64 image
      localStorage.setItem('logo-src', reader.result); // Save to localStorage
    };
    reader.readAsDataURL(file);
  }
}
</script>

<template>
  <label class="button-default" for="logo-upload">Change Logo</label>
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