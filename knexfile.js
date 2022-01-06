module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lemon_aide',
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/dev'
    },
    useNullAsDefault: true
  }
};
