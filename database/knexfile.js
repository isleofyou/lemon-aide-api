module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lemon_aide',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
