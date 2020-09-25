['structure-dom', 'copy-social-buttons', 'read-more'].forEach((n) => {
  var el = document.createElement('script');
  el.src = '<%= atomPath %>/' + n + '.js';
  document.body.appendChild(el);
})




setTimeout(() => {
  if (window.resize) {
    const html = document.querySelector('html')
    const body = document.querySelector('body')

    html.style.overflow = 'hidden'
    html.style.margin = '0px'
    html.style.padding = '0px'

    body.style.overflow = 'hidden'
    body.style.margin = '0px'
    body.style.padding = '0px'

    window.resize()
  }
}, 100)
