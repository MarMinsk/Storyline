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

function booksShow(req, res) {
  Book
  .findById(req.params.id)
  .exec()
  .then(book => {
    if(!book) {
      return res.render('error', { error: 'No book found.' });
    }
    return res.render('books/show', { book });
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

module.exports = {
  index: booksIndex,
  show: booksShow
};
