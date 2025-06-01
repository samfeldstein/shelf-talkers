const form = document.getElementById('shelf-talker-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cardContainer = document.getElementById("card-container");

  // Get form data
  const formData = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    blurb: document.getElementById('blurb').value,
    submitter: document.getElementById('submitter').value
  };

  // Create card container
  const card = document.createElement('div');
  card.className = 'card';

  // Title + author wrapper
  const headerDiv = document.createElement('div');

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  titleDiv.setAttribute('contenteditable', 'true');
  titleDiv.textContent = formData.title;
  
  const authorDiv = document.createElement('div');
  authorDiv.className = 'author';
  authorDiv.setAttribute('contenteditable', 'true');
  authorDiv.textContent = 'by ' + formData.author;

  headerDiv.appendChild(titleDiv);
  headerDiv.appendChild(authorDiv);

  // Blurb
  const blurbDiv = document.createElement('div');
  blurbDiv.className = 'Blurb';
  blurbDiv.setAttribute('contenteditable', 'true');
  blurbDiv.textContent = formData.blurb;

  // Submitter
  const submitterDiv = document.createElement('div');
  submitterDiv.className = 'submitter';
  submitterDiv.setAttribute('contenteditable', 'true');
  submitterDiv.textContent = formData.submitter;

  // Build card
  card.appendChild(headerDiv);
  card.appendChild(blurbDiv);
  card.appendChild(submitterDiv);

  // Add to page
  cardContainer.appendChild(card); // or some specific container
  e.target.reset(); // Clears the form
  document.getElementById('title').focus(); // Focuses the first input
});