const parse = require('pg-connection-string').parse
const { host, port, database, password } = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host,
        port,
        database,
        password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      }
    }
  }
})