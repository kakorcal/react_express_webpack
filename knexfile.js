module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {database: 'react_address_book'},
    migrations: {directory: './server/db/migrations'},
    seeds: {directory: './server/db/seeds'}
  }
}