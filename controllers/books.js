const Book      = require('../models/book');

function booksIndex(req, res, next) {
  Book
  .find()
  .then((books) => res.render('books/index', { books }))
  .catch(next);
}

function booksShow(req, res, next) {
  Book
  .findById(req.params.id)
  .then((book) => {
    if(!book) return res.status(404).render('statics/404');
    res.render('books/show', { book });
  })
  .catch(next);
}

function booksNew(req, res) {
  return res.render('books/new');
}

function booksCreate(req, res, next) {
  Book
  .create(req.body)
  .then(() => res.redirect('/books'))
  .catch(next);
}

function booksEdit(req, res, next) {
  Book
  .findById(req.params.id)
  .then((book) => {
    if(!book) return res.status(404).render('statics/404');
    res.render('books/edit', { book });
  })
  .catch(next);
}


function booksUpdate(req, res, next) {
  Book
  .findById(req.params.id)
  .then((book) => {
    if(!book) return res.status(404).render('statics/404');

    for(const field in req.body) {
      book[field] = req.body[field];
    }

    return book.save();
  })
  .then((book) => res.redirect(`/books/${book.id}`))
  .catch(next);
}

function booksDelete(req, res, next) {
  Book
  .findById(req.params.id)
  .then((book) => {
    if(!book) return res.status(404).render('statics/404');
    return book.remove();
  })
  .then(() => res.redirect('/books'))
  .catch(next);
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
