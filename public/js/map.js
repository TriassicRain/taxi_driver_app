function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 3,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
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
