const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    lastName: String,
    firstName: String,
    department: String
})

const teacher = mongoose.model('teacher', TeacherSchema);

module.exports = teacher;