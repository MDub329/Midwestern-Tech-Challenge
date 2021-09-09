var parse = require('pg-connection-string').parse;
var config = parse('postgres://vsjssgcheevtnq:dc431b61c0c23ece51d57aa7bee62de6f1e2b45918328e5bf4b77ee46162f3f9@ec2-52-45-238-24.compute-1.amazonaws.com:5432/da96ghc82pskrs');
// Update with your config settings.
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