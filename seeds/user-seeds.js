const { User } = require('../models');

const userData = [
  {
    username: 'richard',
    password: '1234'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;