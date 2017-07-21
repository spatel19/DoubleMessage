var express = require('express');
var router = express.Router();
var models = require('../models/models');
var User = models.User;


module.exports = function(passport) {
  // Add Passport-related auth routes here, to the router!
  // YOUR CODE HERE
  router.get('/', function(req, res, next){
    (req.body.user) ? res.redirect('/contacts') : res.redirect('/login');
  });

  router.get('/signup', function(req, res){
    res.render('signup');
  });

  router.post('/signup', function(req, res){
    if(req.body.password === req.body.RepeatPassword){
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,



    });
    user.save(function(err, user){
      if(err){
        console.log(err)
      }
      if(user){
        res.redirect('/login')
      }
    })
  res.redirect('/login')
  }
    else{
      res.render('/signup');
    }
  })

  router.get('/login', function(req, res){
    res.render('login');
  })

  router.get('/logout', function(req, res){

  })

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/contacts',
    failureRedirect: '/login'
  }))

  return router;
}
