/** servidor.js */
let http = require('http'),
    url  = require('url'),
    path = require('path'),
    fs   = require('fs'),
    os   = require('os');

const port = 8888;

let mimeTypes = {
    "html" : "text/html",
    "css"  : "text/css",
    "js"   : "text/javascript",
    "json" : "application/json",
    "jpeg" : "image/jpeg",
    "jpg"  : "image/jpg",
    "png"  : "image/png",
    "ico"  : "image/ico",
    "gif"  : "image/gif",
    "svg"  : "image/svg"
}

http.createServer((req, res) => {
    let uri = url.parse(req.url).pathname;

    uri === '/' ? uri = './index.html': uri;

    let filename = path.join(process.cwd(), uri);
    let fileStream = fs.createReadStream(filename);

    fileStream.on('error', (err) => {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 not found!\n');
        res.end();
    })

    fileStream.on('open', () => {
        let mimeType = mimeTypes[path.extname(filename).split('.')[1]];
        res.writeHead(200, {'Content-Type':mimeType});
        fileStream.pipe(res);
    })
}).listen(port);

/* listening */

let interfaces = os.networkInterfaces();
let host;

for(let devices in interfaces) {
    let alias = 0;

    interfaces[devices].forEach(function(details) {
        if(details.family == 'IPv4') {
            host = (devices + (alias ? ':' + alias: ''), details.address);
            ++alias;
        }
    });

    console.log(host + ':' + port);
}