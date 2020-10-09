let pointsAll = document.querySelectorAll('ul li strong~br');
pointsAll.forEach((brEl) => {
  let fakeBrEl = document.createElement('span');
  fakeBrEl.classList.add('br');
  brEl.parentElement.insertBefore(fakeBrEl, brEl)
})
