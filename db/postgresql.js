// tommy's password ==> lol123
// abiel's password ==> root

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'lol123',
  port: 5432,
})
module.exports = pool;