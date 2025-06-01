// Load saved data on page load
window.addEventListener('load', () => {
  const saved = localStorage.getItem('shelfTalkerData');
  if (saved) {
    const data = JSON.parse(saved);
    document.querySelector('.title').textContent = data.title || '';
    document.querySelector('.author').textContent = data.author || '';
    document.querySelector('.blurb').textContent = data.blurb || '';
    document.querySelector('.submitter').textContent = data.submitter || '';
  }
});