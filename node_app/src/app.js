const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://mongo:27017/node_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
