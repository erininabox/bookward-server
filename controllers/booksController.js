const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
    models.bookSet.find({}, (err, foundBooks) => {
        if(err) return console.log(err);
        res.json(foundBooks);
    })
  })

router.get('/:id', (req, res) => {
    models.bookSet.findById(req.params.id, (err, foundBook) => {
        if(err) return console.log(err);
        res.json(foundBook);
    })
})

router.post('/add', (req, res) => {
    models.bookSet.create(req.body, (err, savedBook) => {
        if (err) return console.log(err);
        res.json(savedBook);
    })
})

router.put('/:id', (req, res) => {
    models.bookSet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedBook) => {
            if(err) return console.log(err);
            res.json(updatedBook);
        }
    )
})

router.delete('/:id', (req, res) => {
    models.bookSet.findByIdAndDelete(req.params.id, (err, deletedBook) => {
        if(err) return console.log(err);
        res.json({ message: `Successfully deleted ${deletedBook}` });
    })
})

module.exports = router;