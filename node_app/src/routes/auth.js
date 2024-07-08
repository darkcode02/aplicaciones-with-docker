const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mock user
const user = {
  id: 1,
  username: 'user',
  password: bcrypt.hashSync('password', 8)
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).send('Username or password is incorrect');
  }

  const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
