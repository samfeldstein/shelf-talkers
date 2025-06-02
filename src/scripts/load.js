function loadAllCards() {
  const saved = localStorage.getItem('allShelfTalkerData');
  if (saved) {
    const allData = JSON.parse(saved);
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      if (allData[index]) {
        card.querySelector('.title').innerHTML = allData[index].title || '';
        card.querySelector('.author').innerHTML = allData[index].author || '';
        card.querySelector('.blurb').innerHTML = allData[index].blurb || '';
        card.querySelector('.submitter').innerHTML = allData[index].submitter || '';
      }
    });
  }

  // Convert markdown immediately after loading
  document.querySelectorAll('[contenteditable]').forEach(element => {
    element.innerHTML = element.innerHTML
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  });
}



// Load on page load
window.addEventListener('load', loadAllCards);