const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');
const env         = require('../config/env');

// Require models
const Book = require('../models/book');

mongoose.connect(env.db, () => {
  // console.log('Connected');
});

// Delete all books
Book.collection.drop();

Book
  .create([
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Classic literature',
      image: 'http://images.foyles.co.uk/xlarge/books/img/0/0/9/9780099511151.jpg',
      link: 'http://www.foyles.co.uk/witem/fiction-poetry/pride-and-prejudice,jane-austen-9780099511151'
    },
    {
      title: 'We Need To Talk About Kevin',
      author: 'Lionel Schriver',
      genre: 'Contemporary fiction',
      image: 'http://mppl.org/wp-content/uploads/We-Need-to-Talk-About-Kevin1.jpg',
      link: 'http://www.foyles.co.uk/witem/fiction-poetry/we-need-to-talk-about-kevin,lionel-shriver-kate-mosse-9781846687341'
    },
    {
      title: 'The Miniaturist',
      author: 'Jessie Burton',
      genre: 'Contemporary fiction',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51FKV1ByLUL._SX326_BO1,204,203,200_.jpg',
      link: 'https://www.amazon.co.uk/Miniaturist-Jessie-Burton/dp/1447250931'
    }
  ])
  .then(books => {
    console.log(`${books.length} books were created.`);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
