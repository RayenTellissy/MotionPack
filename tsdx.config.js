const terser = require("@rollup/plugin-terser")

module.exports = {
  rollup(config, options) {
    config.plugins.push(terser())
    return config
  }
}