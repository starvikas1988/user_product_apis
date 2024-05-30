require('dotenv').config();

module.exports = {
  db: {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
  },
  secretKey: process.env.SECRET_KEY,
};
