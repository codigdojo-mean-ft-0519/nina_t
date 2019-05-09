var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === "/cars") {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);              
            response.end();
        });
    }
    //How to link to a stylesheet?  Would the request.url be the same as what is linked in my html files?
    else if(request.url === '/stylesheets/styles.css'){
        fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/car1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car2.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car3.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car4.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car4.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car5.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car5.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet1.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet2.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet3.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet4.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet4.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet5.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet5.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet6.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet6.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/pet7.png'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/pet7.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === "/cars/new"){
        fs.readFile('./views/newCars.html','utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('The URL requested is not available.');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");
