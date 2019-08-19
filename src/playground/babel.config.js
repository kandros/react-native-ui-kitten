const path = require('path');
const Config = require('../../config');

/**
 * UI Kitten modules aliases.
 * Allows importing framework modules into playground
 */
const moduleAliases = {
  'react-native-ui-kitten': path.resolve(__dirname, '../framework'),
  '@kitten/theme': path.resolve(__dirname, '../framework/theme'),
  '@kitten/ui': path.resolve(__dirname, '../framework/ui'),
  '@ui-kitten/eva-icons': path.resolve(__dirname, '../eva-icons'),
  '@ui-kitten/moment': path.resolve(Config.MODULES_PATH, 'moment'),
  '@ui-kitten/date-fns': path.resolve(Config.MODULES_PATH, 'date-fns'),
};

/**
 * Eva modules aliases.
 * Allows importing Eva modules into playground depending on environment
 */
const evaAliases = {
  '@eva-design/processor': path.resolve(Config.PROCESSOR_PATH),
  '@eva-design/eva': path.resolve(Config.MAPPING_PATH),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...evaAliases,
    ...moduleAliases,
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'babel-preset-expo',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
  ];

  return { presets, plugins };
};
