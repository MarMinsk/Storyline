const express      = require('express');
const router       = express.Router();

// Controllers
const books        = require('../controllers/books');

//  router.get('/', (req, res) => res.render('statics/home'));

router.get('/', (req, res) => res.render('index'));

router.route('/books')
  .get(books.index);

router.route('/books/:id')
  .get(books.show);

module.exports = router;
