const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  image: { type: String },
  link: {type: String},
  comments: [{
    body: { type: String, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  }, {
    timestamps: true
  }]
});

module.exports = mongoose.model('Book', bookSchema);
