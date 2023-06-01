const mongoose = require('mongoose');

const testDataSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('TestData', testDataSchema);