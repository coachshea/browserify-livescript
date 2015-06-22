var ls = require('livescript');
var through = require('through');

function compile(file, data) {
    var compiled = ls.compile(data, {
      bare: true,
      map: 'embedded',
      filename: file
    });

    return compiled.code + '\n';
}

function isLive (file) {
    return /.*\.ls$/.test(file);
}

module.exports = function (file) {
    if (!isLive(file)) return through();

    var data = '';
    return through(write, end);

    function write (buf) { data += buf }
    function end () {
        var src;
        try {
            src = compile(file, data);
        } catch (error) {
            this.emit('error', error);
        }
        this.queue(src);
        this.queue(null);
    }
};
