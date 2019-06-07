'use strict';

var webpack = require('webpack');

var base = require('./webpack.config.base.js');
var config = require('./webpack.easycanvas.dist.js');

config.entry = config.entry('components/!(_*).js');
config.output.filename = '[name].js';
config.output.libraryTarget = 'umd';
config.mode = 'production';

config.optimization = base.optimization(config.mode);

module.exports = config;
