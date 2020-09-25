const jsonLink = 'https://interactive.guim.co.uk/docsdata-test/1h3S_adTVe3zUjw6yDaepB10dVNEIrWQXvxchzWhDPo8.json';

loadJSON(jsonLink, function (rawData) {
  const data = rawData.sheets['Sheet1'];
  data.forEach((d) => {
    addArticle(d);
  })
});


function addArticle(data) {
  console.log(data.Headline);
  console.log(data.Author);
  console.log(data.Title);
  console.log(data.Photo);
  console.log(data.Link);

  if (data.Photo) {
    console.log('has photo', data.Photo)
  } else {
    console.log('no photo', '—')
  }
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
