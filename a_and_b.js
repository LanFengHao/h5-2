var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

var a = function() {
  console.log('a');
  event.removeListener('b-event', b);
};
var b = function() {
  console.log('b');
  event.removeListener('a-event', a);
};
  event.on('a-event', a);
  event.on('b-event', b);

  event.emit('b-event');
  event.emit('a-event');
  // event.emit('b-event');
