const models = require('./models');
const data = require('./bookData.json');

models.bookSet.deleteMany({}, (err, result) => {
    if(err) {
        console.log(err);
        process.exit();
    }

    console.log(result.deletedCount,'books deleted');
    // console.log(data)
    models.bookSet.create(data.bookSet, (err,seededBooks) => {
        if(err) {
            console.log(err);
            process.exit();
        }

        console.log(seededBooks.length, 'books created successfully');
        console.log('done!');
        process.exit();
    })
})