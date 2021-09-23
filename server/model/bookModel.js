const mongoose = require('mongoose');

const schema = mongoose.Schema;

const bookModel = new schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },

}, { timestamps: true });


const Book = mongoose.model('books', bookModel);

module.exports = { Book };