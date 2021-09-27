const router = require('express').Router();
const { default: TeachersModel } = require('../../bookward-client/src/models/TeachersModel');
const { lendingModel } = require('../models');
const models = require('../models');

router.get('/', (req, res) => {
    models.lendingModel.find({}, (err, foundLendingRecord) => {
        if(err) return console.log(err);
        res.json(foundLendingRecord);
    })
  })

router.get('/:id', (req, res) => {
    models.lendingModel.findById(req.params.id, (err, foundLendingRecord) => {
        if(err) return console.log(err);
        res.json(foundLendingRecord);
    })
})

router.post('/add', async (req, res) => {
    console.log('Req.body', req.body)
    console.log('req.params', req.params)
    try {
        const teacher = await TeachersModel.findOne({lastName: req.body.lastName})
        const book = await mongo.db("bookwarddb").collection("booksets").findById(req.params.id)
        const newLendingRecord = await lendingModel.create(req.body)
        if (!teacher) return res.status(400).json({msg: 'Teacher not found. Try again.'})
        newLendingRecord.teacher.push(teacher)
        newLendingRecord.bookSet.push(book)
        teacher.lendingRecord.push()
        book.lendingRecord.push()
        newLendingRecord.save()
        teacher.save()
        book.save()
    } catch (err) {
        console.log(err)
    }
})

router.put('/:id', (req, res) => {
    models.lendingModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedLendingRecord) => {
            if(err) return console.log(err);
            res.json(updatedLendingRecord);
        }
    )
})

// Probably won't need this??
router.delete('/:id', (req, res) => {
    models.lendingModel.findByIdAndDelete(req.params.id, (err, deletedLendingRecord) => {
        if(err) return console.log(err);
        res.json({ message: `Successfully deleted ${deletedLendingRecord}` });
    })
})

module.exports = router;