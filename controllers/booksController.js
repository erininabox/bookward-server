const express = require('express');
const models = require('../models');
const router = express.Router();

const errMessage = { message: 'Please try again' };

router.get('/', async (req, res) => {
    console.log('You have reached the books route');
    try {
      const books = await models.bookSet.findAll()
      res.json({ books })
    } catch (error) {
        res.json(errMessage)
    }
  })

router.get('/:id', async (req, res) => {
    try {
        const foundBook = await models.bookSet.findByPk(req.params.id);
        res.json(foundBook);
    } catch (err) {
        res.json(errMessage)
    }
})

router.post('/', async (req, res) => {
    console.log(`This should show us something: ${req.body.title}`);
    try {
        const newBook = await models.bookSet.create({ 
            bookID: req.body.bookID,
            title: req.body.title,
            author: req.body.author,
            yearPub: req.body.yearPub,
            description: req.body.description
        })
        // const newBook = await models.bookSet.create(req.body);
        res.json(newBook);
    } catch (err) {
        console.log(err)
        res.json(errMessage)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await models.bookSet.update(
            req.body,
            {
                where: { id: req.params.id },
                returning: true
            }
        );
        res.json(updatedBook);
    } catch (err) {
        res.json(errMessage)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedBook = await models.bookSet.destry({
            where: { id: req.params.id }
        });
        res.json({ deleted: true });
    } catch (err) {
        res.json(errMessage)
    }
})

module.exports = router;