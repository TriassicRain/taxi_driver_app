function initMap() {

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

    localStorage.setItem('lat', lat)
    localStorage.setItem('lng', lng)

    console.log("Lat and Long: ",lat,lng);

    var marker = new google.maps.Marker({
      position: {lat: e.latLng.lat(), lng: e.latLng.lng()},
      map: map
    });

  });
}
