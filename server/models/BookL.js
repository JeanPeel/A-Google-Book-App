var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model('bookList', BookSchema);
module.exports = Book;