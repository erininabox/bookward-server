const models = require('./models');
const data = require('./teacherData.json');

models.teacher.deleteMany({}, (err, result) => {
    if(err) {
        console.log(err);
        process.exit();
    }

    console.log(result.deletedCount,'teachers deleted');
    // console.log(data)
    models.teacher.create(data.teacher, (err,seededTeachers) => {
        if(err) {
            console.log(err);
            process.exit();
        }

        console.log(seededTeachers.length, 'teachers created successfully');
        console.log('done!');
        process.exit();
    })
})