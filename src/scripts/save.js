// Save data when content changes
document.querySelectorAll('[contenteditable="true"]').forEach(element => {
  element.addEventListener('input', () => {
    const data = {
      title: document.querySelector('.title').textContent,
      author: document.querySelector('.author').textContent,
      blurb: document.querySelector('.blurb').textContent,
      submitter: document.querySelector('.submitter').textContent
    };
    localStorage.setItem('shelfTalkerData', JSON.stringify(data));
  });
});