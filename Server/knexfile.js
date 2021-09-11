var parse = require('pg-connection-string').parse;
var config = parse(process.env);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      ssl: { "rejectUnauthorized": false },
      ...config
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      ssl: { "rejectUnauthorized": false },
      ...config
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
