(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"intro","version":"1.1.1","description":"An introduction to she.codes content","main":"index.js","brain":{"requires":[],"provides":["intro"]},"scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"author":"Jan Bölsche","license":"CCBY","devDependencies":{"marked":"^0.3.3","browserify":"^9.0.3","brfs":"^1.4.0","markdownify":"^0.1.0"}}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h2><a name=\"intro_three-tracks-one-topic-language\" class=\"anchor\" href=\"#intro_three-tracks-one-topic-language\"><span class=\"header-link\"></span></a>Three tracks, one topic: Language</h2><p>It’s all about communication. That’s why we start all three tracks of this course talking about language.</p>\n<p>In Science and History (the yellow track) we talk about the machines that humans invented to communicate among each other over long distances and how codes for communication work. This track gives you background information, stuff to talk about at nerd parties!</p>\n<p>As these machines were improved over time, they became more general-purpose and eventually became programmable. That means, they now follow instructions given by them in a machine-readable language – machine code. We talk about this and other programming languages for human-machine communication in the black track. This track teaches you the craft and art of coding.</p>\n<p>Because of the advent of programmable machines (also known as computers), a new profession, the programmer, was born. She.codes is all about helping you to join this happy bunch of people. Programmers know the languages that make machines do what the programmers want them to do. Equally important though, they know the languages and codes to talk about programming stuff to each other efficiently. This allows them to collaborate in small or large groups to build more interesting programs than they could make on their own. Today, collaboration is more important than ever. Thankfully it also is easier than it ever was, due to a fairly new movement: social coding – and that is what we’ll talk about in the blue track.</p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{}]},{},[1]);
