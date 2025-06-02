function convertMarkdown(element) {
  element.innerHTML = element.innerText
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

// Convert markdown on blur
document.querySelectorAll('[contenteditable]').forEach((element) => {
  element.addEventListener('blur', function () {
    convertMarkdown(this);
  });
});