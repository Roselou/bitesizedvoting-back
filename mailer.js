

var transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
            xoauth2 : xoauth2.createXOAuth2Generator({
            user: 'bitesizedvoter@gmail.com',
            clientId: '',
            clientSecret: '',
            refreshToken: ''
        })
    }
})

var mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: ''
}

transporter.sendMail(mailOptions, function(){
    if(err){
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
})