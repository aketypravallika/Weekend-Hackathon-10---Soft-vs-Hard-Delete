const express = require('express');
const Student = require('./models/Student');


const app = express();

// middleware 
app.use(express.json());

// Routes

// Get all the students
app.get('/students', async (req, res) => {
    // write your codes here
    try{
        const students = await Student.find();
        res.status(200).json(students);
    } catch(error) {
        res.status(404).json({error})
    }

})

// Add student to database
app.post('/students', async (req, res) =>{
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    }catch(error){
        res.status(400).json({error})
    }
})

// Get specific student
app.get('/students/:id', async (req, res) =>{
    // write your codes here
})

// delete specific student
app.delete('/students/:id', async (req, res) =>{
    // write your codes here
}) 


module.exports = app;
