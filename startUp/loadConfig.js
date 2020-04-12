const merge = require('lodash.merge');

const config = require('../config/appConfig.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const appConfig = merge(defaultConfig, environmentConfig);

module.exports=appConfig;

