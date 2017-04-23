const express      = require('express');
const router       = express.Router();

// Controllers
const books        = require('../controllers/books');

router.get('/', (req, res) => res.render('statics/home'));
router.get('/', (req, res) => res.render('index'));

router.route('/books')
  .get(books.index)
  .post(books.create);
router.route('/books/new')
  .get(books.new); // 'new' route needs to be above the 'show' route
router.route('/books/:id')
  .get(books.show)
  .put(books.update);
router.route('/books/:id/edit')
  .get(books.edit);


module.exports = router;
