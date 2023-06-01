require('dotenv').config(); // loading up all environment varaibles in .env file
const express = require('express');
const mongoose = require('mongoose');

// database
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
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