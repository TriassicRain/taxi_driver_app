$(document).ready(function() {

setTimeout(changeColor, 1200)

function changeColor() {
  $('#header').css('background-color', 'gold')
}

$('#submit').click(logData);

function logData(e){
  let lat = localStorage.lat;
  let lng = localStorage.lng;
  console.log("lat long: ", lat,lng)
  let time = $('#timedrop').val()
  let qs = {
    'lat': lat,
    'lng': lng,
    'time': parseInt(time)
  }
  console.log(qs)

  //ajax call goes here
    $.ajax({
      url: '/results',
      data: qs,
      method: 'GET'
    },function(data){
      console.log("data from ajax", data)
    })

    let $button = $("<button id='show'>").text("RESULTS!")
    let $a = $("<a href='/results?lat="+lat+"&lng="+lng+"&time="+parseInt(time)+"'>")
    let body = $('body')
    $a.append($button)
    body.append($a)
}

});
