require('dotenv').config(); // loading up all environment varaibles in .env file
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb')

// database
// note: if running mongodb server on local use 127.0.0.1 instead of localhost
// mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to database!'));



// server
const app = express();


app.use(express.json());

const testRouter = require('./routes/test');
app.use('/test', testRouter);


app.listen(8000, () => {
    console.log("Server Started on http://localhost:8000");
})