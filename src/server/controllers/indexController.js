const connection = require('../config/database');
const Account = connection.models.Account;
const path = require('path');
const bcrypt = require ('bcryptjs');

const account_register_post = async (req,res,next) => {
  console.log('CREATING NEW USER');
  console.log(req.body);
  
  const newAccount = new Account({
    name: req.body.name,
    salt: 134567,
    age: req.body.age,
    username: req.body.email,
    phoneNumber: req.body.phoneNumber,
    pastPosition: req.body.pastPosition,
    homeOwner: req.body.homeOwner || false,
    timeframe: req.body.timeframe,
    brigg: req.body.briggs,
    foodStamps: req.body.foodStamps || false
  });
  

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  newAccount.password = hashedPassword;

  newAccount
  .save()
  .then(user => {
    res.redirect('http://localhost:3000/login');
  })
  .catch(err => console.log(err));
}

const account_login_post = (req,res,next) => {
  console.log("logged in")
  res.redirect('http://localhost:3000/dashboard');
}

const match_get = (req,res,next) => {
  Account.findOne().then((data) => {
    console.log(data);
    res.send(data);
  })
}

const account_login_get = (req,res,next) => {
  console.log("hello");
  res.sendFile('./index.html');
}

const account_register_get = (req,res,next) => {
  res.send("<p>You are on the register page</p>");
}

module.exports = {
    account_login_post,
    account_login_get,
    account_register_post,
    account_register_get,
    match_get
};
