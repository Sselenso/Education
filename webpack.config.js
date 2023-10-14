const path = require('path');

module.exports = {
	entry: './assets/js/pages.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
		
  },
};