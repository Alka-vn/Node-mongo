const express = require("express");
const connection = require("./model");
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyParser = require("body-parser");
const CourseController = require("./controllers/courses");

const application = express()

application.use(bodyParser.urlencoded({
    extended : true
}));

application.set('views',path.join(__dirname,"/views/"))

application.engine("hbs",expressHandlerbars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine","hbs");


application.get("/",(req,res)=>{
    //res.send("<h1>Hello</h1>")
    res.render("index",{})
});

application.use("/course",CourseController)


application.listen("3000",()=>{
    console.log("Server started")
});