// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/products',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};
