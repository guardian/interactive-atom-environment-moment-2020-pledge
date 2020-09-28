const jsonLink = 'https://interactive.guim.co.uk/docsdata-test/1h3S_adTVe3zUjw6yDaepB10dVNEIrWQXvxchzWhDPo8.json';

loadJSON(jsonLink, function (rawData) {
  const data = rawData.sheets['Sheet1'];
  const readMoreEl = document.querySelector('.read-more');
  const linksEl = readMoreEl.querySelector('.read-more__links');
  data.forEach((d) => {
    const articleEl = createArticleEl(d);
    linksEl.appendChild(articleEl);
  });

  if (data.length > 0) {
    readMoreEl.classList.add('has-content')
  }
});


function createArticleEl(data) {
  let articleEl = document.createElement('div');
  articleEl.classList.add('read-more__links__link');
  articleEl.innerHTML = `<div class="headline">${data.Headline}</div><div class="byline"><div class="byline__author">${data.Author}</div><div class="byline__about">${data.Title}</div></div><img class="picture"><div class="more">Read more</div><a class="link" href='${data.Link}'></a>`;

  if (data.Photo) {
    articleEl.querySelector('img').setAttribute('src', data.Photo);
  }

  return articleEl;
}

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}
