var fs = require('fs');
var marked = require('marked');

module.exports.getMeta = function() {
    return require('./package.json');
};
module.exports.getHTML = function() {
    return marked(fs.readFileSync('./readme.md', 'utf-8'));
};
