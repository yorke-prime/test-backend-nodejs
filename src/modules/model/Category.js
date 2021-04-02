const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('Category', categorySchema);