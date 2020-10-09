let pointsAll = document.querySelectorAll('ul li strong~br');
console.log(pointsAll.length)
pointsAll.forEach((brEl) => {
  console.log('point', brEl);
  let fakeBrEl = document.createElement('span');
  fakeBrEl.classList.add('br');
  brEl.parentElement.insertBefore(fakeBrEl, brEl)
})
