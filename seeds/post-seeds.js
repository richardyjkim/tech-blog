const { Post } = require('../models');

const postData = [
  {
    title: 'Hello world',
    content: 'Pellentesque id mollis turpis, sit amet ultricies enim. Etiam at faucibus tortor. Cras vehicula massa dignissim augue interdum, non aliquam ligula mollis.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;