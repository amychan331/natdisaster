require('dotenv').config()
var geojson = require('./location.geojson')

window.onload = function () {
  fetch('https://desolate-crag-37715.herokuapp.com/London')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });

  mapboxgl.accessToken = process.env.MAPBOXGL_TOKEN;

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-96, 37.8],
    zoom: 3
  })

  map.on('load', function () {
    map.addLayer({
      id: 'locations',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'icon-image': 'marker-24',
        'icon-allow-overlap': true,
      }
    });

    // add sidebar
    buildLocationList(geojson)
  })

  function buildLocationList(incidents) {
    for (i = 0; i < incidents.features.length; i++) {
      // Building the listing HTML
      var prop = incidents.features[i].properties;
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = 'listing-' + i;

      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'handle';
      link.dataPosition = i;
      link.innerHTML = prop.screen_name;

      var content = listing.appendChild(document.createElement('div'));
      content.innerHTML = prop.screen_name;

      // Adding event listening for when sidebar link is clicked
      link.addEventListener('click', function(e) {
        var clickedListing = geojson.features[this.dataPosition];

        flyToIncident(clickedListing);
        createPopUp(clickedListing);

        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    }
  }

  // INTERACTIVE FEATURES
  function flyToIncident(currentFeature) {
    console.log(currentFeature)
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<p>' + currentFeature.properties.message + '</p>')
      .addTo(map);
  }

  // When map is clicked
  map.on('click', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
    console.log(features)
    if (features.length) {
      var clickedPoint = features[0];

      flyToIncident(clickedPoint);
      createPopUp(clickedPoint);

      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }

      var selectedFeature = clickedPoint.properties.screen_name;
      for (var i = 0; i < stores.features.length; i++) {
        if (stores.features[i].properties.handle === selectedFeature) {
          selectedFeatureIndex = i;
        }
      }
      var listing = document.getElementById('listing-' + selectedFeatureIndex);
      listing.classList.add('active');
    }
  });
}