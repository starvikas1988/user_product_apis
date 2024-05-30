const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const config = require('../config');

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await userModel.createUser(username, hashedPassword);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.getUserByUsername(username);
    if (!user) return res.status(400).json({ error: 'User not found' });

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, username: user.username }, config.secretKey);
      res.json({ token });
    } else {
      res.status(400).json({ error: 'Invalid password' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
