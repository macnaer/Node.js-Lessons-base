const http = require('http');



const server = http.createServer((req ,res) => {
    const url = req.url;
    console.log(req);
    if (url === "/"){
        console.log(res.setHeader('Content-type', 'text/html'));
        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Node Web Server</title></head>");
        res.write("<body><h1>Home</h1>");
        res.write("<h2>Node.js APP</h2>");
        res.write("<nav><ul><li><a href='/users'>Users</a></li></ul></nav>");
        res.write("<nav><ul><li><a href='/contact'>Contact Us</a></li></ul></nav>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else if (url === "/users"){
        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Node Web Server</title></head>");
        res.write("<body><h1>Users</h1></body>");
        res.write("<h2>UserManager</h2>");
        res.write("<nav><ul><li><a href='/'>Home</a></li></ul></nav>");
        res.write("<nav><ul><li><a href='/contact'>Contact Us</a></li></ul></nav>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else if (url === "/contact") {
        let address = "Rivne Soborna str.";
        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write("<head><title>Node Web Server</title></head>");
        res.write("<body><h1>Contact Us</h1>");
        res.write("<h2>We are youn company ...</h2>");
        res.write("<nav><ul><li><a href='/'>Home</a></li></ul></nav>");
        res.write("<nav><ul><li><a href='/users'>Users</a></li></ul></nav>");
        res.write(`<div>Address: ${address}</div>`);
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else{
        console.log(res.setHeader('Content-type', 'text/html'));
        res.write("<html>");
        res.write("<head><title>Not Found</title></head>");
        res.write("<body><h1>Opsss.</h1></body>");
        res.write("<h2>Page not found ...</h2>");
        res.write("<nav><ul><li><a href='/'>Home</a></li></ul></nav>");
        res.write("<nav><ul><li><a href='/users'>Users</a></li></ul></nav>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
  
});

server.listen(3000);