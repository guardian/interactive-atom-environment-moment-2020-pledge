
setupNativeShare();

function setupNativeShare() {
  const shareData = {
    text: 'The Guardian’s climate pledge',
    url: 'https://www.theguardian.com/environment/ng-interactive/2020/oct/05/the-guardian-climate-pledge-2020-environment-emergency-carbon-emissions',
  }
  const shareEl = document.querySelector('.support-and-share__share__sheet');

  shareEl.addEventListener('click', () => {
    console.log('tryign to share');
    navigator.share(shareData);
  })
}
