import mongoose from 'mongoose'

async function dbConnection(){
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
dbConnection()