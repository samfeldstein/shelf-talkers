// Save and load all cards
function saveAllCards() {
  const cards = document.querySelectorAll('.card');
  const allData = Array.from(cards).map((card, index) => ({
    title: card.querySelector('.title').innerHTML,
    author: card.querySelector('.author').innerHTML,
    blurb: card.querySelector('.blurb').innerHTML,
    submitter: card.querySelector('.submitter').innerHTML
  }));

  localStorage.setItem('allShelfTalkerData', JSON.stringify(allData));
}

// Save on any input
document.querySelectorAll('[contenteditable]').forEach(element => {
  element.addEventListener('input', saveAllCards);
});