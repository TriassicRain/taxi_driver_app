$(document).ready(function() {

setTimeout(changeColor, 1200)

function changeColor() {
  $('#header').css('background-color', 'gold')
}

$('#submit').click(logData);

function logData(){
  let lat = localStorage.lat;
  let lng = localStorage.lng;
  console.log("lat long: ", lat,lng)
  let time = $('#timedrop').val()
  let data = {
    'lat': lat,
    'lng': lng,
    'time': parseInt(time)
  }
  console.log(data)

  //ajax call goes here
    $.ajax({
      url: '/results',
      data: data,
      method: 'GET'
    },function(data){
      console.log(data)
    })
}

});
