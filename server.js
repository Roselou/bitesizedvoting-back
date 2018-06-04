const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//Body-Parser 
app.use(bodyParer.json());


//CORS - may or may not be needed
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

//testing
app.get('/', function (req, res) {
    res.send('Yup, working...');
})

//Listener 
app.lister(process.env.PORT || 8080, function(){
    console.log("listening on port 8080!")
})