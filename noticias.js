let http = require('http');

let server = http.createServer((req, res) => {
    
    let categoria = req.url;

    switch (categoria) {
        case '/tec':
            res.end('<html><body><p>Tecnologia</p></html></body>');
            break;
        case '/moda':
            res.end('<html><body><p>Moda</p></html></body>');
            break;
        default:
            res.end('<html><body><p>Portal</p></html></body>');
            break;
    }
});

server.listen(3000);