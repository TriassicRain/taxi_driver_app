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
    center: new google.maps.LatLng(40.771833, -73.975596),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

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
