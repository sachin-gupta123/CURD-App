const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const studentRoutes = express.Router();
const PORT = 4000;

let student = require('./student.model')
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1;27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

studentRoutes.route('/').get(function(req, res) {
    student.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
studentRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    student.findById(id, function(err, student) {
        res.json(student);
    });

});

studentRoutes.route('/add').post(function(req, res) {
    let student = new student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'record added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new record failed');
        });
});

//delete event

studentRoutes.route('/delete-student/:_id').delete(function(req,res){
    console.log("hello");
    console.log(req.params._id);
    student.remove({
        _id: req.params._id
    }, function(err) {
        if (err)
            res.send(err);
        else
            res.send({'code':200,'httpcode':200,'meesage':'Record Succesfully Deleted'}); 
    })
})


studentRoutes.route('/registration').post(function(req,res){

    student.create({
        "name": req.body.name,
        "father_name" : req.body.father_name,
        "dob" : req.body.dob,
        "mobile" : req.body.mobile,
        "course" : req.body.course,
        "semester" : req.body.semester,
        "address" : req.body.address

    },(err,data)=>{
        console.log(data);

        if(err)
        {
            res.send({"HttpCode":210,"Code":200,"message":"Database Error"})
        }
        else{
            res.send({"Code":200,"Httpcode":200,"Message":"Sucess","Data":data})
        }
    })
})

studentRoutes.route('/update/:id').post(function(req, res) {
    console.log(req.params.id)
    student.findById(req.params.id, function(err, student) {
        if (!student)
            res.status(404).send("data is not found");
        else
            student.name = req.body.name;
            student.father_name = req.body.father_name;
            student.dob = req.body.dob;
            student.mobile = req.body.mobile;
            student.course = req.body.course;
            student.semester = req.body.semester;
            student.address = req.body.address;

            student.save().then(student => {
                res.json('Record updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/todos', studentRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});