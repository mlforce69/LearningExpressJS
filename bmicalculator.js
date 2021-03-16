const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));


const port = app.listen(3000, function(){
    console.log("The server is running on port 3000.")
})

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html" )
});

app.post('/', function(req, res){

    let height = Number(req.body.height);
    let weight = Number(req.body.weight);

    let result = (weight / (Math.pow(height, 2))).toFixed(1);

    res.send("Your BMI is " + result);

});