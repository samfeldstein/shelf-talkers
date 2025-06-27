import close from "../utils/close"

clearAllCards()

// Clear cards
function clearAllCards() {
  const button = document.getElementById('clearAll')

  button.addEventListener('click', function () {
    clearFields()
    localStorage.removeItem('allShelfTalkerData')
    const box = button.closest('.options-box')
    close(box)
    closeMenu()
  })
}

// Clear fields
function clearFields() {
  const cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.querySelector('.title').innerHTML = ''
    card.querySelector('.author').innerHTML = ''
    card.querySelector('.blurb').innerHTML = ''
    card.querySelector('.submitter').innerHTML = ''
  });
}

// Close menu
function closeMenu() {
  const optionsMenu = document.getElementById('optionsDiv')
  close(optionsMenu)
}