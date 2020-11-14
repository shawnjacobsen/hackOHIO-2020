const express = require('express');
const app = express();
const session = require('express-session');
let passport = require('passport');
let crypto = require('crypto');
const MongoStore = require('connect-mongo')(session);
const connection = require('./config/database');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// view engine (REACT Build)
app.use(express.static(path.join(__dirname, 'src/client/build')));

// PORT
const PORT = 5000;

/* ----------   SESSION SETUP   ---------- */

const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  })
);

/* ----------   MIDDLEWARE & STATICS   ---------- */

const bodyParser = require("body-parser");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

/* ----------   PASSPORT AUTH   ---------- */

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

/* ----------   ROUTES   ---------- */
const indexRoutes = require('./routes/indexRoutes');
const accountRoutes = require('./routes/accountRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', indexRoutes);
app.use('/accounts', accountRoutes);
app.use('/dashboard', dashboardRoutes);

// express listen on specified PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});