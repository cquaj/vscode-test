
const EventEmitter = require('events');         // class

var url = '';  
 
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('logging', {id: message});
    }
}

module.exports = Logger;