import express from 'express'
import session from 'express-session';

const app=express()
app.use(express.urlencoded({extended:true}))
app.set("view engine",'ejs');

app.use(session({
  secret:'sky',
}))


app.get("/login",(req,res)=>{
  res.render("login")
})
app.post("/profile",(req,res)=>{
 req.session.data=req.body;
 console.log(req.session.data);
  res.render("profile")
});

app.get("/",(req,res)=>{
 const data=req.session.data;
 res.render("home",{data})
 console.log("data:",data)
})

app.listen(3300)
