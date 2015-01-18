exports = module.exports = plugin;
exports.path = __dirname;
exports.version = require('./package.json').version;

function plugin() {
  return function(style) {
      style.include(__dirname);
  };
}
