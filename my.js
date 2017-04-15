var myreadFile = function(err, encodimg, callback) {
  console.log(arguments[arguments.length - 1]);
  console.log(arguments.length);
  console.log(arguments[0]);
}

var callback = util.inFunction(arguments[arguments.length]);
