import express from 'express';

const app=express();
app.use(express.urlencoded({extended:true}))
 app.set("view engine",'ejs');

app.get("/login",(req,res)=>{
  res.render('login');
})
app.post("/profile",(req,res)=>{
 res.setHeader('Set-Cookie',[
  "login=true",
   "name="+req.body.name,
  "password="+req.body.password
 ])
  res.render('profile')
});
app.get("/",(req,res)=>{
let cookiesData=req.get('cookie')
cookiesData=cookiesData.split(";")
cookiesData=cookiesData[1].split('=')
console.log(cookiesData[1]);
res.render('home',{name:cookiesData[1]})
console.log(cookiesData)
})
app.listen(2000)