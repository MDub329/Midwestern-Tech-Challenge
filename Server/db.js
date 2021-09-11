var parse = require('pg-connection-string').parse;
var config = parse(process.env.DATABASE_URL);

var options = {
    development: {
        client: 'pg',
        connection: {
            ssl: { "rejectUnauthorized": false },
            ...config
        },
        pool: { min: 0, max: 10 }
    },
    production: {
        client: 'pg',
        connection: {
            ssl: { "rejectUnauthorized": false },
            ...config
        },
        pool: { min: 0, max: 10 }
    },
};
var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);