const express = require('express');
const router = express.Router();
const TestModel = require('../models/testModel')


// Get all test data
router.get('/', async (req, res) => {
    // res.write('hello world!');
    try {
        const testDatas = await TestModel.find();
        res.json(testDatas);
    }
    catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
});

// Get one test data
router.get('/:id', getTestData, async (req, res) => {
    res.json(res.data)
})


// Create one test data
router.post('/create', async (req, res) => {
    const reqData = new TestModel({
        name: req.body.name,
        number: req.body.number,
    })
    try {
        const newData = await reqData.save();
        res.status(201).json(
            {
                message: "added data successfully",
                newData
            }
        )
    } catch (err) {
        res.status(400).json({ errorMessage: err.message });
    }
})

// Update one test data
router.patch('/:id', getTestData, async (req, res) => {
    console.log(req.body.name)
    if (req.body.name != null) {
        res.data.name = req.body.name;
    }
    try {
        const updatedData = await res.data.save();
        res.json(updatedData);
    } catch (err) {
        res.status(400).json({ errorMessage: err.message })
    }

})

// Delete one test data
router.delete('/:id', getTestData, async (req, res) => {
    try {
        const deleteId = res.data._id;
        await TestModel.findOneAndRemove(res.data._id);
        res.json({ message: `Deleted data with id: ${deleteId}` });
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
})

// middleware function
async function getTestData(req, res, next) {
    let data;
    try {
        data = await TestModel.findById(req.params.id);
        console.log("finish getting data")
        if (data == null) {
            return res.status(404).json({ message: `can't find data with id: ${req.params.id}` });
        }
    } catch (err) {
        return res.status(500).json({ errorMessage: err.message });
    }
    res.data = data;
    next();
}
module.exports = router;