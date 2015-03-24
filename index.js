var fs = require('fs');
//var marked = require('marked');

getMeta = module.exports.getMeta = function() {
    // return JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf-8'));
    return require('./package.json');
};
getHTML = module.exports.getHTML = function() {
//    return marked(fs.readFileSync(__dirname + '/readme.md', 'utf-8'));
    return require('./readme.md');
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', getMeta().track, getMeta(), getHTML());
}
