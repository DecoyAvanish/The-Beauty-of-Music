document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');

  const whiteKeys = document.querySelectorAll('.key.white');

  const showPopup = () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.className = 'whitepopup';
    popup.innerHTML = `
      <p>&nbsp&nbsp - The piano keyboard consists of alternating white and black keys arranged in repeating groups of seven. <br>
        &nbsp&nbsp - The white keys represent the natural notes of the musical alphabet each corresponding to a specific pitch. <br>
        &nbsp&nbsp- These keys on the piano keyboard are named after the first seven letters of the alphabet: A, B, C, D, E, F, G.
      </p>
      <button class="close-btn" style = "font-family: Monospace">Close</button>
    `;
    document.body.appendChild(popup);

    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(popup);
    });

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(popup);
    });

    popup.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  };

  whiteKeys.forEach(whiteKey => {
    whiteKey.addEventListener('click', showPopup);
  });

  const blackKeys = document.querySelectorAll('.key.black');

  const showBlackPopup = () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.className = 'blackpopup';
    popup.innerHTML = `
      <p>&nbsp&nbsp - The piano keyboard consists of alternating white and black keys arranged in repeating groups of seven. <br>
      &nbsp&nbsp - The black keys represent the sharps and flats, which are the notes in between the natural notes. <br>
      &nbsp&nbsp - These keys take their names from the neighboring white keys and are either sharps (#) or flats (b) depending on whether they are raised or lowered in pitch <br>
      &nbsp&nbsp - For example, the black key between C and D can be called either C# (C sharp) or Db (D flat), depending on the context.</p>
      <button class="close-btn" style = "font-family: Monospace">Close</button>
    `;
    document.body.appendChild(popup);

    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(popup);
    });

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(popup);
    });

    popup.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  };

  blackKeys.forEach(blackKey => {
    blackKey.addEventListener('click', showBlackPopup);
  });
});
