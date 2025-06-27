import close from "../utils/close"

clearAllCards()

function clearAllCards() {
  const button = document.getElementById('clearAll')

  button.addEventListener('click', function () {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      card.querySelector('.title').innerHTML = ''
      card.querySelector('.author').innerHTML = ''
      card.querySelector('.blurb').innerHTML = ''
      card.querySelector('.submitter').innerHTML = ''
    });

    localStorage.removeItem('allShelfTalkerData')

    closeMenu()
  })
}


function closeMenu() {
  const optionsMenu = document.getElementById('optionsDiv')
  close(optionsMenu)
}