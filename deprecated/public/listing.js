window.onload = function () {
  var url = "https://node-red-test-555.mybluemix.net/cachedNewsItems"
  fetch(url, {
    method: 'GET',
    mode: 'cors'
  })
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    var articles = response.items;

    for (i = 0; i < articles.length; i++) {
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = 'listing-' + i;

      var link = listing.appendChild(document.createElement('a'));
      link.href = `./index.html/?location={articles[i].entities[0]}`;
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = articles[i].title;

      var content = listing.appendChild(document.createElement('div'));
      content.innerHTML = articles[i].description;
    }
  })
}