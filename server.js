const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

//Body-Parser 
app.use(bodyParser.json());



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




let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'bitesizedvoter@gmail.com',
            pass: 'Hackathon2018',
    }
});

let mailOptions = {
    from: 'bitesizedvoter@gmail.com',
    to: 'daltonvaren@gmail.com',
    subject: 'You Choose A Canidate!',
    html: `
    <html>
    <head>
      <style>
        #body {
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div id='body'>
        <h2>Hi Voter!</h2>
        <p>You learned about the SF Mayor candidates and you supported:</p>
        <a href='#'><h2>Name of Canidate</h2></a>
        <img src="http://www.clker.com/cliparts/i/2/n/G/S/J/blue-thumbs-up-icon.svg.med.png" height="45" width="45">
        <a href='https://registertovote.ca.gov/'><h2>Registor to Vote</h2></a>
        <p style="color:red">Vote June 6th</p>
        <p style="font-weight: bold">Thanks,</p>
        <p>Bite Sized Voter Team</p>
      </div>
    </body>
  </html>
    `
}

transporter.sendMail(mailOptions, function(err, res){
    if(err){
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
});



//Listener 
app.listen(process.env.PORT || 8080, function(){
    console.log("listening on port 8080!")
})