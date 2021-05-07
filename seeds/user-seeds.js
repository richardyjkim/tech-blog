const { User } = require('../models');

const userData = [
  {
    username: 'Richard',
    password: '1234'
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;