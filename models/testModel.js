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
}, /*{collection: 'testdatas'} */)  

/*
An important note: the first argument passed to the model should be the singular form 
of your collection name. Mongoose automatically changes this to the plural form, 
transforms it to lowercase, and uses that for the database collection name.

However this might be able to overrided by adding:
    |--------------------------------------|
    | { collection: 'MyCollectionName' }); |
    |--------------------------------------|
after the schema to specify the collection name with desired case sensitivity

*/
module.exports = mongoose.model('TestData', testDataSchema);