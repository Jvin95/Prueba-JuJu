const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    status: { type: String, enum: ['available', 'reserved'] }
});

module.exports = mongoose.model('Book', bookSchema);
s