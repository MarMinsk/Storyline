const express        = require('express');
const router         = express.Router();

// Controllers
// const statics        = require('../controller/statics');
const books          = require('../controllers/books');
const registrations  = require('../controllers/registrations');
const sessions       = require('../controllers/sessions'); // *walkthru notes

router.get('/', (req, res) => res.render('statics/home'));

router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/new')
  .get(books.new); // 'new' route needs to be above the 'show' route

router.route('/books/:id')
  .get(books.show)
  .put(books.update)
  .delete(books.delete);

router.route('/books/:id/edit')
  .get(books.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

module.exports = router;
