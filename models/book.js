const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  urlLink: {type: String}
}, {
  timestamp: true
}
);

module.exports = mongoose.model('Book', bookSchema);
