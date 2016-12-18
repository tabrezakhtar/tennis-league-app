'use strict';

const express = require('express');

const leagueRouter = require('./league-router');

const router = new express.Router();

router.use('/', express.static('public'));
router.use('/api/league', leagueRouter);
module.exports = router;
