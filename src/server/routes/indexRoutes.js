const express = require('express');
const router = express.Router();
const genPassword = require('../lib/passwordUtils').genPassword;
const connection = require('../config/database');
const Account = connection.models.Account;
const passport = require('passport');
const indexController = require('../controllers/indexController');
const { index } = require('../models/account');

// login
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) console.log("wrong");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });

router.get('/login', passport.authenticate('local'), indexController.account_login_get);

// register route
router.post('/register', indexController.account_register_post);
router.get('/register', indexController.account_register_get);

// matchMaking
router.get('/matchMaking/check', passport.authenticate('local', {failureRedirect: 'http:localhost:3000/login'}));
router.get('/matchMaking', indexController.match_get);

module.exports = router;
