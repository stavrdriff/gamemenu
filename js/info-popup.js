function showInfoPopupContent(clickableContent) {
  const popup = clickableContent.closest('.info-popup');

  clickableContent.addEventListener('click', () => {
    popup.classList.toggle('info-popup--is-active');
    popup.classList.remove('has-display');
  });
}

function closeInfoPopup(button) {
  const infoPopup = button.closest('.info-popup');

  button.addEventListener('click', () => {
    infoPopup.classList.add('info-popup--is-hidden');
  })
}

function initInfoPopup() {
  const infoPopups = [...document.querySelectorAll('.info-popup')];

  if (!infoPopups.length) {
    return;
  }

  infoPopups.forEach(popup => {
    const button = popup.querySelector('.info-popup__close-button');
    const clickableContent = popup.querySelector('.info-popup__image-container');
    
    clickableContent.addEventListener('click', showInfoPopupContent(clickableContent));
    button.addEventListener('click', closeInfoPopup(button));
  });
}

initInfoPopup();