var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookListSchema = new Schema({
title: String,
authors: Array,
description: String,
image: String,
link: String
});

const bookList = mongoose.model('bookList', bookListSchema);
module.exports = bookList;