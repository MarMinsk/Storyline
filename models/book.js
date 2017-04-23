const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  image: { type: String },
  link: {type: String}
}, {
  timestamp: true
}
);

module.exports = mongoose.model('Book', bookSchema);
