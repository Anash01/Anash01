
var request = require('request');

request('http://facebook.com', function(error, response, body)
{
    if(!error & response.statusCode==200)
    {
        // var parsedData = JSON.parse(body);
        console.log(body);
        
    }
    
});