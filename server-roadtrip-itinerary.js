var express = require('express');

var app = express();

app.use(express.static('./public/css'));

app.get('/San-Francisco', function(request,response){
    response.sendFile('./public/html/sf-1.html',{root: './'});
});

app.get('/Boston', function(request,response){
    response.sendFile('./public/html/bos-2.html',{root: './'});
});

app.get('/New-York-City', function(request,response){
    response.sendFile('./public/html/ny-3.html',{root: './'});
});

app.get('/Los-Angelos', function(request,response){
    response.sendFile('./public/html/la-4.html',{root: './'});
});

app.get('/Miami', function(request,response){
    response.sendFile('./public/html/miami-5.html',{root: './'});
});


app.listen(8080, function(){
    console.log('The app is running on port 8080');
});
