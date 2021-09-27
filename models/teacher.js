const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departments = ['English', 'Social Studies', 'Math', 'Science', 'PE', 'Art', 'Music', 'Electives']

const TeacherSchema = new Schema({
    lastName: String,
    firstName: String,
    department: String,
    lendingRecord: [{ type: Schema.Types.ObjectId, ref: 'lendingModel'}],
})

const teacher = mongoose.model('teacher', TeacherSchema);

module.exports = teacher;