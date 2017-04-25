const Book = require('../models/book');

function commentsCreate(req, res, next) {
  console.log(res);
  Book
    .findById(req.params.id)
    .exec()
    .then(book => {
      if (!book) {
        const err = new Error('Book not found');
        err.status = 404;
        throw err;
      }

      const comment = {
        user: res.locals.user._id,
        body: req.body.body
      };

      book.comments.push(comment);

      return book.save();
    })
    .then((book) => {
      console.log(book);
      res.redirect(`/books/${req.params.id}`);
    })
    .catch(next);
}

module.exports = {
  create: commentsCreate
};
