const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testedev88@gmail.com',
            pass: '34256677'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'testedev88@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(3000);