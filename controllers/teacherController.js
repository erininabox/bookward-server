const router = require('express').Router();
const models = require('../models');

router.get('/', (req, res) => {
    models.teacher.find({}, (err, foundTeachers) => {
        if(err) return console.log(err);
        res.json(foundTeachers);
    })
  })

router.get('/:id', (req, res) => {
    models.teacher.findById(req.params.id, (err, foundTeacher) => {
        if(err) return console.log(err);
        res.json(foundTeacher);
    })
})

router.post('/add', (req, res) => {
    models.teacher.create(req.body, (err, savedTeacher) => {
        if (err) return console.log(err);
        res.json(savedTeacher);
    })
})

router.put('/:id', (req, res) => { 
    models.teacher.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedTeacher) => {
            if(err) return console.log(err);
            res.json(updatedTeacher);
        }
    )
})

router.delete('/:id', (req, res) => {
    models.teacher.findByIdAndDelete(req.params.id, (err, deletedTeacher) => {
        if(err) return console.log(err);
        res.json({ message: `Successfully deleted ${deletedTeacher}` });
    })
})

module.exports = router;