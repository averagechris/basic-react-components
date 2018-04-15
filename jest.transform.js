module.exports = require('babel-jest').createTransformer({
  presets: ["react"],
  plugins: ["transform-object-rest-spread"],
});
