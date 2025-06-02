function loadAllCards() {
  const saved = localStorage.getItem('allShelfTalkerData');
  if (saved) {
    const allData = JSON.parse(saved);
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      if (allData[index]) {
        const cardData = allData[index];
        const isEmpty = Object.values(cardData).every(value =>
          value.trim() === '' || value.trim() === '<br>'
        );

        if (!isEmpty) {
          card.querySelector('.title').innerHTML = cardData.title || '';
          card.querySelector('.author').innerHTML = cardData.author || '';
          card.querySelector('.blurb').innerHTML = cardData.blurb || '';
          card.querySelector('.submitter').innerHTML = cardData.submitter || '';
        }
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