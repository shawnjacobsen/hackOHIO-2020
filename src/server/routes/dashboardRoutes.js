const express = require('express');
const router = express.Router();
const connection = require('../config/database');
const passport = require('passport');
const dashboardController = require('../controllers/dashboardController');

// index
router.post('/', passport.authenticate('local'), dashboardController.dashboard_get);

module.exports = router;
