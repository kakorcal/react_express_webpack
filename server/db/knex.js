const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve('knexfile'))[env];
module.exports = require('knex')(config);