var express = require('express');

var app = express();

app.get('/San-Francisco', function(request,response){
    response.sendFile('./public/html/sf-1.html',{root: './'});
});

app.listen(8080, function(){
    console.log('The app is running on port 8080');
});
