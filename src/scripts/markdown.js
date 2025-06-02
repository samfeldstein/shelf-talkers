// Allow basic markdown formatting on blur. Format on load handled in load.js
// document.querySelectorAll('[contenteditable]').forEach(element => {
//   element.addEventListener('blur', function () {
//     // Convert markdown to HTML
//     this.innerHTML = this.innerHTML
//       .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
//       .replace(/\*([^*]+)\*/g, '<em>$1</em>');
//   });
// });

document.querySelectorAll('[contenteditable]').forEach(element => {
  element.addEventListener('keydown', function (e) {
    // Ctrl+B (Windows/Linux) or Cmd+B (Mac) for bold
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      document.execCommand('bold');
    }

    // Ctrl+I (Windows/Linux) or Cmd+I (Mac) for italic
    if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
      e.preventDefault();
      document.execCommand('italic');
    }
  });
});
