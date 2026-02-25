import mongoose from 'mongoose'

import express from 'express';
import studentModel from './model/studentModel.js';


const app=express();

app.use(express.json()),

await mongoose.connect("mongodb://localhost:27017/fundx").then(()=>{
  console.log("_______connected_______")
})



 app.get("/",async(req,res)=>{

  const studentData=await studentModel.find()
  console.log(studentData)

  res.send({studentData})
})
app.post("/save",async(req,res)=>{
  const {name,email,age}=req.body; 
  if(!req.body || !name || !age || !email){
    res.send({
      message:"please fill all requirement(name age email)",
      sucess:false,
      stredinfo:null
    })
    return false
  }
  console.log(req.body)
  const studentData=await studentModel.create(req.body)  
  res.send({
    message:"data stored ",
    sucess:true,
    storeInformation:studentData
  })

})

app.put("/update/:id",async(req,res)=>{
  const id=req.params.id;
  const studentData=await studentModel.findByIdAndUpdate(id,{
    ...req.body
  })
  console.log(req.body,id);
  res.send({
message:"data stored",
sucess:true,
storedinfo:studentData

  })
})
app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id;
  const studentData=await studentModel.findByIdAndDelete(id)
  res.send({
    message:"data deleted",
    sucess:true,
    info:studentData
  })
  console.log(studentData)

})

app.listen(1768)
/*async function dbConnection(){
  await mongoose.connect("mongodb://Localhost:27017/fundx")
  const schema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
  })
  const studentModel=mongoose.model('funds',schema);
  const result= await studentModel.find();
  console.log(result)

}
dbConnection();*/ 


/*async function dbConnection(){
  await mongoose.connect("mongodb://localhost:27017/fundx")

  const schema=mongoose.Schema({
 name:String,
 age:Number,
 gmail:String
  })
  const sateeshModel=mongoose.model('funds',schema)
  const result= await sateeshModel.find();
  console.log(result)

}
dbConnection()*/
