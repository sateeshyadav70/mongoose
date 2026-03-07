import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const transporter = nodemailer.createTransport({
service:'gmail',
auth:{
user:process.env.EMAIL,
pass:process.env.PASSWORD
}
});

app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 5490;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("email");
});

app.post("/submit-mail",(req,res)=>{

const userEmail = req.body.EMAIL;
const userSubject = req.body.subject;
const userMessage = req.body.message;

console.log(req.body);

const mailOptions = {

from: process.env.EMAIL,

to: process.env.EMAIL,   // mail tumhe aayegi

replyTo: userEmail,

subject: "New message from website",

text: `
New message from website

User Email: ${userEmail}

Subject: ${userSubject}

Message:
${userMessage}
`
};

transporter.sendMail(mailOptions,(err,info)=>{

if(err){
console.log(err);
res.send("Email operation failed");
}else{
console.log(info.response);
res.send("Email sent successfully");
}

});

});

app.listen(PORT,()=>{
console.log(`Server running on http://localhost:${PORT}/`);
});