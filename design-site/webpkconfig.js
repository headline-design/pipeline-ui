const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
// eslint-disable-next-line

module.exports = function(context, options) {
  return {
    name: "custom-webpack-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [new NodePolyfillPlugin()]
      };
    }
  };
};