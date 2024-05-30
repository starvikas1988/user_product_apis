const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config.db);

const createUser = async (username, hashedPassword) => {
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
};

const getUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

module.exports = { createUser, getUserByUsername };
