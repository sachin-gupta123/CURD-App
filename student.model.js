const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let student = new Schema({
    name: {
        type: String
    },
    father_name: {
        type: String
    },
    dob: {
        type: String
    },
    mobile: {
        type: String
    },
    course: {
        type: String
    },
    semester: {
        type: String
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model('Student', student);