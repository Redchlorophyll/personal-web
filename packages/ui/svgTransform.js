'use strict';

const {transform} = require('@babel/core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process() {
      return 'module.exports = {};';
  },
  getCacheKey() {
      // The output is always the same.
      return 'svgTransform';
  },
};