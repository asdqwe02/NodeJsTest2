const express = require('express');
const router = express.Router();
const TestModel = require('../models/testModel')


// Get all test data
router.get('/', async (req, res) => {
    try {
        const testDatas = await TestModel.find();
        res.json(testDatas);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one test data
router.get('/:id', (req, res) => {
    // req.params.id to get the paramter
})


// Create one test data
router.post('/:id', (req, res) => {

})

// Update one test data
router.patch('/:id', (req, res) => {

})

// Delete one test data
router.delete('/:id', (req, res) => {

})

module.exports = router;