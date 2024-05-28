const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amanda',
    added: new Date(),
  },
  {
    text: 'Hello world!',
    user: 'Charles',
    added: new Date(),
  },
  {
    text: 'This is a message.',
    user: 'Gus',
    added: new Date(),
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = {
  router,
  messages
}
