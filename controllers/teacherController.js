const express = require('express');
const models = require('../models');

// Create Teacher
models.teacher.create({
    lastName: 'Shirley',
    firstName: 'Anne',
    department: 'Language Arts'
}).then(createdTeacher=>{
    console.log(createdTeacher)
    process.exit()
})

// Read One Teacher
models.teacher.findOne({
    where: {lastName: 'Shirley'}
}).then(foundTeacher=>{
    console.log(foundTeacher)
    process.exit()
})