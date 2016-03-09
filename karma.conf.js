'use strict';

module.exports = function (config) {
	config.set({
		frameworks : ['jasmine'],
		browsers: ['PhantomJS'],
		files: [
		'app/app.js',
		'specs/unit/*.js'
		],
		reporters: ['dots']
	});
};
