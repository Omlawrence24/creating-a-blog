const sequelize = require('../config/connection');
const { User } = require('../models');
const { Blog } = require('../models');

// seeds for userdata
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();


// seeds 
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await Blog.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

