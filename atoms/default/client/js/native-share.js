
setupNativeShare();

function setupNativeShare() {
  const shareData = {
    text: 'The Guardian’s environment pledge',
    url: 'https://www.theguardian.com',
  }
  const shareEl = document.querySelector('.support-and-share__share__sheet');

  shareEl.addEventListener('click', () => {
    console.log('tryign to share');
    navigator.share(shareData);
  })
}
