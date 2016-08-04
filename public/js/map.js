function initMap() {
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: 0, lng: 0},
  //   zoom: 3,
  //   styles: [{
  //     featureType: 'poi',
  //     stylers: [{ visibility: 'off' }]  // Turn off points of interest.
  //   }, {
  //     featureType: 'transit.station',
  //     stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
  //   }],
  //   disableDoubleClickZoom: true
  // });

  /* Thanks to http://stackoverflow.com/questions/3818016/google-maps-v3-limit-viewable-area-and-zoom-level for limiting zoom */
  // This is the minimum zoom level that we'll allow
  var minZoomLevel = 11;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: minZoomLevel,
    center: new google.maps.LatLng(40.663920, -73.938353),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Bounds for North America
  var strictBounds = new google.maps.LatLngBounds(
   new google.maps.LatLng(40.917577, -74.25909),
   new google.maps.LatLng(40.588280, -73.712911)
  );

  // Listen for the dragend event
  // google.maps.event.addListener(map, 'dragend', function() {
  //  if (strictBounds.contains(map.getCenter())) return;

  //  // We're out of bounds - Move the map back within the bounds

  //  var c = map.getCenter(),
  //      x = c.lng(),
  //      y = c.lat(),
  //      maxX = strictBounds.getNorthEast().lng(),
  //      maxY = strictBounds.getNorthEast().lat(),
  //      minX = strictBounds.getSouthWest().lng(),
  //      minY = strictBounds.getSouthWest().lat();

  //  if (x < minX) x = minX;
  //  if (x > maxX) x = maxX;
  //  if (y < minY) y = minY;
  //  if (y > maxY) y = maxY;

  //  map.setCenter(new google.maps.LatLng(y, x));
  // });

   // Limit the zoom level
   google.maps.event.addListener(map, 'zoom_changed', function() {
     if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
   });

  map.addListener('click', function(e) {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    console.log("Lat and Long: ",lat,lng);

    // ajax call goes here
    $.ajax({
      url: '/results',
      data: {
        'lat': lat,
        'lng': lng,
        'time': 7
      },
      method: 'GET'
    },function(data){
      console.log(data)
    })

    var marker = new google.maps.Marker({
      position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
      map: map
    });
  });
}
