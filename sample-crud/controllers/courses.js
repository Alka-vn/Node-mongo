const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model("Course")

router.get('/add',(req,res)=>{
    res.render('add-course')
})

router.post('/add',(req,res)=>{
    var course = new CourseModel()
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.courseId = Math.ceil(Math.random()*10000);

    course.save((err,doc)=>{
        if(!err){
            res.redirect("/course/list")
        }
        else{
            res.send("Error Occurred");
        }
    });



});

router.get("/list",(req,res)=>{
    CourseModel.find((err,docs)=>{
        if(!err){
            res.render("list",{ data : docs });
        }
        else{
            res.send("Error")
        }
    })
    
})

module.exports = router;
