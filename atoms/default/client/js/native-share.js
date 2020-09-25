const shareData = {
  title: "The Guardian’s environment pledge",
  text: 'We want the Guardian to play a leading role in reporting on the environmental catastrophe',
  url: 'https://www.theguardian.com',
}

if (canShare()) {
  setupNativeShare();
}

function setupNativeShare() {
  const shareEl = document.querySelector('.support-and-share__share__sheet');
  if (shareEl) {
    shareEl.classList.add('can-share');
    shareEl.addEventListener('click', () => {
      navigator.share(shareData);
    })
  }
}

function canShare() {

  // return true;

  return navigator.canShare && navigator.canShare(shareData);
}
