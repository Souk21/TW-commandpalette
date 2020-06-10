/*\
title: $:/core/modules/filters/decodeuricomponent.js
type: application/javascript
module-type: filteroperator

Filter operator for applying decodeURIComponent() to each item.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter functions
*/

exports.decodeuricomponent = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		var value = title;
		try {
			value = decodeURIComponent(title);
		} catch(e) {
		}
		results.push(value);
	});
	return results;
};

exports.encodeuricomponent = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push(encodeURIComponent(title));
	});
	return results;
};

exports.decodeuri = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		var value = title;
		try {
			value = decodeURI(title);
		} catch(e) {
		}
		results.push(value);
	});
	return results;
};

exports.encodeuri = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push(encodeURI(title));
	});
	return results;
};

exports.decodehtml = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push($tw.utils.htmlDecode(title));
	});
	return results;
};

exports.encodehtml = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push($tw.utils.htmlEncode(title));
	});
	return results;
};

exports.stringify = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push($tw.utils.stringify(title));
	});
	return results;
};

exports.jsonstringify = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push($tw.utils.jsonStringify(title));
	});
	return results;
};

exports.escaperegexp = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push($tw.utils.escapeRegExp(title));
	});
	return results;
};

exports.escapecss = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		// escape any character with a special meaning in CSS using CSS.escape()
		results.push(CSS.escape(title));
	});
	return results;
};

})();