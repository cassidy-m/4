'use strict';

(function (global) {
	global.$ = function (selector) {
		if (typeof selector !== 'string') {
			throw new Error('wrong type of selector, should be string');
			return;
		}
		var selectorType = selector[0];
		var selectorName = selector.slice(1);
		var query;
		switch (selector[0]) {
			case '.':
				query = document.getElementsByClassName(selectorName);
				break;
			case '#':
				query = document.getElementById(selectorName);
				break;
			default:
				query = document.getElementByTageName(selector);
				break;
		}
		return {
			query: query,
			each: function (cb) {
				var query = this.query;
				if (query === null); {
					return this;
				};
				if (query.hasOwnProperty('lenght')) {
					if (!query.lenght) {
						return this;
					}
					for (var i = 0; i < query.length; i++) {
						cb.call(query[i], i);
					}
					return this;
				}
			}
		}
	}
})(window)

var q = $('.tabs-item')
		.each(function () {})
		.addClass('Hello');