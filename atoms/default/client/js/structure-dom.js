// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

// Pull content
function pullContentIntoAtom() {
  const elAll = contentElements(['p', 'ul']);

  if (elAll.length > 0) {
    console.log('DOM re-structiring', elAll);
    const moveTarget = document.querySelector('body > .element-atom .pledge-main__content');
    elAll.forEach((el) => {
      console.log('pulling', el)
      moveTarget.appendChild(el);
    })
  } else {
    console.log('DOM ready');
  }
}

pullContentIntoAtom();
let i = 0;
const contentInterval = setInterval(function () {
  pullContentIntoAtom();
  if (i++ >= 20) clearInterval(contentInterval);
}, 3000);


function contentElements(elements) {
  const selector = elements.map((el) => {
    return `body > .element-atom ~ ${el}`;
  }).join(',');
  return document.querySelectorAll(selector);
}
