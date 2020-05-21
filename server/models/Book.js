var mongoose = require('mongoose');
var Schema = mongoose.Schema;
import "./Book.css";

var bookListSchema = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
});

const bookList = mongoose.model('bookList', bookListSchema);
module.exports = bookList;