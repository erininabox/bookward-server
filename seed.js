const models = require('./models');
const data = require('./bookData.json');

models.bookSet.deleteMany({}, (err, result) => {
    if(err) {
        console.log(err);
        process.exit();
    }

    console.log(result.deletedCount,'books deleted');

    models.bookSet.create(data.bookData, (err,seededBooks) => {
        if(err) {
            console.log(err);
            process.exit();
        }

        console.log(seededBooks.length, 'books created successfully');
        console.log('done!');
        process.exit();
    })
})