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

function booksNew(req, res) {
  return res.render('books/new');
}

function booksCreate(req, res) {
  Book
    .create(req.body)
    .then(book => {
      if(!book) return res.render('error', { error: 'No book was created!' });
      return res.redirect('/books');
    })
    .catch(err =>{
      return res.render('error', { error: err });
    });
}

function booksEdit(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if (!book) {
        return res.render('error', { error: 'No book found! '});
      }
      return res.render('books/edit', { book });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function booksUpdate(req, res) {
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if(!book) {
        return res.render('error', { error: 'No book found!' });
      }
      for (const field in req.body) {
        book[field] = req.body[field];
      }
      return book.save();
    })
    .then(book => {
      if (!book) {
        return res.render('error', {error: 'Something went wrong during the update.'});
      }
      return res.render('books/show', { book });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function booksDelete(req, res) {
  Book
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(() => {
    return res.redirect('/books');
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

module.exports = {
  index: booksIndex,
  show: booksShow,
  new: booksNew,
  create: booksCreate,
  edit: booksEdit,
  update: booksUpdate,
  delete: booksDelete
};
