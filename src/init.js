const path = require('path');
require('babel-polyfill');

const appRoot = path.join(__dirname, '../');
require('electron-compile').init(appRoot, require.resolve('./main.js'));
