module.exports = {
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/jestCssMapper.js"
  },
  transform: { "^.+\\.js$": "<rootDir>/jest.transform.js" }
};
