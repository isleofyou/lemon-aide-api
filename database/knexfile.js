// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lemon_aide',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
