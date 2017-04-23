const Book      = require('../models/book');

function booksIndex(req, res) {
  Book
  .find()
  .exec()
  .then(books => {
    return res.render('books', { books });
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

module.exports = {
  index: booksIndex
};
