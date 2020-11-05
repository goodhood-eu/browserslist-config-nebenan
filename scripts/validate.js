const browserslist = require('browserslist');
const config = require('../index');

try {
  browserslist(config);
  console.log('Browserslist config is valid');
} catch (e) {
  console.error('Browserslist config is invalid');
  console.error(e);
  process.exit(1);
}
