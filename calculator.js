const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Result is --> " + result);
});

app.get("/bmicalculator", function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");    
});

app.post("/bmicalculator", function(req,res) {
    console.log("Hello");
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight / (height*height);
    res.send("Your BMI is " + result);    
});

app.listen(9000, function(){
    console.log("Server Started on port 9000");
});

