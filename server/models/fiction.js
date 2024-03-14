const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
  title: String,
  authors: String,
  categories: [String],
  thumbnail: String,
  description: String,
  published_year: Number,
  average_rating: Number,
  num_pages: Number,
  ratings_count: Number,
  isbn: {
    isbn13: String,
    isbn10: String,
  },
});

const Books = mongoose.model("Book", books);

module.exports = Books;