const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/login', userRoutes);
router.use('/Blog', blogRoutes);

module.exports = router;
