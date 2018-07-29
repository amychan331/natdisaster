require('dotenv').config()
var geojson = require('./location.geojson')

window.onload = function () {
  mapboxgl.accessToken = process.env.MAPBOXGL_TOKEN;

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-96, 37.8],
    zoom: 3
  })

  map.on('load', function () {
    map.addSource('trees', {
      type: 'geojson',
      data: geojson
    });
    // Add marker/pointer
    geojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<p>' + marker.properties.address + '</p>'))
        .addTo(map);
    });
  })

  // INTERACTIVE FEATURES
  map.on('click', function(e) {
    // Query all the rendered points in the view
    const features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
    if (features.length) {
      map.flyTo({
        center: features[0].geometry.coordinates,
        zoom: 15
      })
    }
  })
}