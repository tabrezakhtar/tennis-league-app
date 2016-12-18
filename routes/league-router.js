'use strict';

const router = require('express').Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', new Date().toISOString());
  next();
});

router.get('/', (req, res) => {
  let leagues = [
    {id: 1, name: 'Gruesome Gophers', location: 'Croydon', members: 4, created: new Date(2012, 8, 1)},
    {id: 2, name: 'Royal Aces', location: 'Crystal Palace', members: 9, created: new Date(2015, 2, 9)},
    {id: 3, name: 'Fiery Anacondas', location: 'Clapham', members: 2, created: new Date(2009, 1, 2)},
    {id: 4, name: 'Magic Seals', location: 'Watford', members: 11, created: new Date(2016, 5, 5)},
    {id: 5, name: 'Wise Sailors', location: 'Twickenham', members: 6, created: new Date(2006, 6, 6)}
  ];

  res.json(leagues);
});

module.exports = router;
