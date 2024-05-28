const express = require('express');
const router = express.Router();
const messages = require('./index');

router.get('/', function (req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/', function (req, res, next) {
  if (req.body.messageText === '' || req.body.messageName === ''){
    res.render('form', { title: 'New Message' })
    return;
  }
  messages.messages.push({ text: req.body.messageText, user: req.body.messageName, added: new Date() });
  res.redirect('/');
})

module.exports = router;
