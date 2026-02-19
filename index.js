import mongoose from 'mongoose'
import express from 'express';
import studentModel from './model/studentModel.js';


const app=express();

await mongoose.connect("mongodb://localhost:27017/fundx").then(()=>{
  console.log("_______connected_______")
})



 app.get("/",async(req,res)=>{

  const studentData=await studentModel.find()
  console.log(studentData)

  res.send({studentData})
})
app.listen(1773)
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