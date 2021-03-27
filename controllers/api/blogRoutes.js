const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// This route grabs blog post 
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
    res.render(userData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Creating a new blog post 
router.post('/', async (req, res) => {
  try {
    const userBlog = await Blog.create({
      blogTitle: req.body.blogTitle,
      blogInfo: req.body.blogInfo,
  
    });
    res.status(200).json(userBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});


// PUT update a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
