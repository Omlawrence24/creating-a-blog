const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {

    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // TODO: Add a comment describing the functionality of this method
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // TODO: Add a comment describing the functionality of this method
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



router.post('/login', (req, res) => {

  
  const first_Name = document.querySelector('#fname-signup').value.trim();
  const last_Name = document.querySelector('#lname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  try {
  User.insert({
      first_Name: req.body.first_Name,
      last_Name: req.body.last_Name,
      email: req.body.email,
      password: req.body.password

    }).then(data => {
      res.status(200)
      console.log(data)
    }
    )
  } catch (err) {
    res.status(400)
  }

})

module.exports = router;



// 