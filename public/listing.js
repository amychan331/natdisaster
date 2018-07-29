window.onload = function () {
  var url = ``
  fetch(url, { method: 'GET'})
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    var articles = response.body;

    for (i = 0; i < articles.length; i++) {
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = 'listing-' + i;

      var link = listing.appendChild(document.createElement('a'));
      link.href = `./index.html/?location={articles[i].location}`;
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = articles[i].title;

      var content = listing.appendChild(document.createElement('div'));
      content.innerHTML = articles[i].summary;
    }
  })
}