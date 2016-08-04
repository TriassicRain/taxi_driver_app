const request           = require('request');
const ENIGMA_KEY        =process.env.ENIGMA_KEY


module.exports = {
  dataReturn (req,res,next){
    console.log('Made it to model')
    const url1 = 'https://localhost:4000'
    // const datapath = '/us.gov.senate.publicrecords.lobbying.lobbying'
    // const fullURL = url1 + ENIGMA_KEY + datapath

    // request.get({
    //   url: fullURL,
    //   qs: {
    //     'search': '@client_name(Google|Vivendi)',
    //     'select': 'client_name, year, amount,transaction_id,client_parent_name,serialid'
    //   }

    // }, function(err, response, body){
    //   if(err) throw err;
    //   let companies = JSON.parse(body);
    //   res.results = companies.result;
    //   next()
    // })


}
}
