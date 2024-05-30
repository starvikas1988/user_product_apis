const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool(config.db);

const getProductsByUserId = async (userId) => {
  const result = await pool.query('SELECT * FROM products WHERE user_id = $1', [userId]);
  return result.rows;
};

const createProduct = async (name, description, price, userId) => {
  const result = await pool.query(
    'INSERT INTO products (name, description, price, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, price, userId]
  );
  return result.rows[0];
};

const updateProduct = async (id, name, description, price, userId) => {
  const result = await pool.query(
    'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
    [name, description, price, id, userId]
  );
  return result.rows[0];
};

const deleteProduct = async (id, userId) => {
  const result = await pool.query(
    'DELETE FROM products WHERE id = $1 AND user_id = $2 RETURNING *',
    [id, userId]
  );
  return result.rows[0];
};

module.exports = { getProductsByUserId, createProduct, updateProduct, deleteProduct };
