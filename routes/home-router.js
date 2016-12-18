'use strict';

const router = require('express').Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  console.log('home router');
  res.send('HOME');
});

module.exports = router;
