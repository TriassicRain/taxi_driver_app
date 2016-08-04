const request           = require('request');
const ENIGMA_KEY        =process.env.ENIGMA_KEY


module.exports = {
  dataReturn (req,res,next){
    console.log('Made it to model')
    const url1 = 'https://localhost:4000/predict'

    let lat = req.query.lat;
    let lng = req.query.lng;
    let time = req.query.time;
    console.log(lat)
    console.log(lng)
    console.log(time)

    request.get({
      url: url1,
      qs: {
        'pickup_lat': lat,
        'pickup_lon': lng,
        'hour': time
      }
    }, function(err,response,body){
      if(err) throw err;
      let price = JSON.parse(body);
      res.results = price.result;
      next()
    })
  }
}
