const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
  
    res.render('login');
  });
  
//   router.get('/dashboard', withAuth, (req, res) => {
//     res.render('dashboard');     
//   });


   
  router.get('/', withAuth, (req, res) => {
    res.render('home');     
  });

  router.get('/profile', (req, res) => {
    res.render('profile');     
  });
router.get('/home', (req,res) => {

    res.redirect('./profile')
})


module.exports = router