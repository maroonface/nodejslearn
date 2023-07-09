var events = require('events');

var eventEmitter = new events.EventEmitter();

var myeventfunc1 = function () {
    console.log("function 1");
}

var myeventfunc2 = function () {
    console.log("function2");
}

eventEmitter.on('func1', myeventfunc1);
eventEmitter.on('func2', myeventfunc2);

eventEmitter.emit('func1');
