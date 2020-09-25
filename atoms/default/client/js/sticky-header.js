
function enableStickyHeader() {
  let pledgeHeaderEl = document.querySelector('.pledge-header');
  let stickyEl = document.querySelector('.sticky-header');
  window.addEventListener('scroll', () => {
    const headerHeight = pledgeHeaderEl.offsetHeight;
    const headerTop = pledgeHeaderEl.getBoundingClientRect().top;
    const scrollOffset = headerHeight + headerTop;

    const stickyHeight = stickyEl.offsetHeight;
    if (scrollOffset < stickyHeight) {
      stickyEl.classList.add('visible');
    } else {
      stickyEl.classList.remove('visible');
    }
  })
}

enableStickyHeader();
