fs.writeFile = function(path, data, options, callback) {
  var callback = maybeCallback(arguments[arguments.length - 1]);
  if (util.isFunction(options) || !options) {
    options = { encoding: 'utf8', mode: 438 /*=0666*/, flag: 'w' };
  } else if (util.isString(options)) {
    options = { encoding: options, mode: 438, flag: 'w' };
  } else if (!util.isObject(options)) {
    throw new TypeError('Bad arguments');
  }
  assertEncoding(options.encoding);
  var flag = options.flag || 'w';
  fs.open(path, options.flag || 'w', options.mode, function(openErr, fd) {
    if (openErr) {
      if (callback) callback(openErr);
    } else {
      var buffer = util.isBuffer(data) ? data : new Buffer('' + data,
          options.encoding || 'utf8');
      var position = /a/.test(flag) ? null : 0;
      writeAll(fd, buffer, 0, buffer.length, position, callback);
    }
  });
};
