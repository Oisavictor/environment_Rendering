const http = require('http');
const url = require('url');
const fs = require('fs');

// Connection to the files
const Home = fs.readFileSync(`${__dirname}/Home.html`, 'utf-8');
const About = fs.readFileSync(`${__dirname}/About.html`, 'utf-8');
const Contact = fs.readFileSync(`${__dirname}/Contact.html`, 'utf-8');


// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    // Home page
    if (pathName === '/' || pathName === '/Home.html'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(Home);
    
    // About page
    }else if (pathName === '/About.html'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(About);
        
    // Contact page
    }else if (pathName === '/Contact.html'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(Contact)
    
    // Not Found
    }else {
        res.writeHead(404, {'Content-type': 'text/html',});
        res.end('<h1 style ="text-align: center">Error! - page not found!</h1>');
    }
});

server.listen(8080, "127.0.0.1", () => {
    console.log("Listening to requests on port 8080");
})