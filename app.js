
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');         // class
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/numbers') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});

// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

server.listen(3000);

console.log('listen on 3000');


// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('logging', (arg) => {
//     console.log('Logging message', arg)
// });

// logger.log('hello buddy...');

// emitter.emit('logging', {msg: 'hello world'});

//----- Register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called...', arg)
// });

// emitter.on('messageLogged', function(arg){
//     console.log('Listener called...', arg)
// });

//----- Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'url'});

// fs.readdir('./', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(totalMemory);
// console.log(`freeMemory: ${freeMemory}`);

// var pathObj = path.parse(__filename);
// console.log(pathObj);

// var filename = path.basename(__filename);

// console.log(path.parse(filename));

// const log = require('./logger');
// console.log(log)

// log('hello world');

// function hello(name) {
//     global.console.log('\nHello ' + name + '\n');  // or just console.log()
// }

// console.log(module)