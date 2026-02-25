import express from 'express'
import multer from 'multer';
import fs from 'fs';

const uploadPath='data';

if(!fs.existsSync(uploadPath)){
  fs.mkdirSync(uploadPath);
}
const app=express()
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'data')
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload=multer({storage})
app.get("/",(req,res)=>{
  res.send(`
     <form action='/submit' method='post' enctype="multipart/form-data">
      <input type="file" name="myFile">
      <button>Upload file</button>
    </form>
    `)
})
app.post("/submit", upload.single('myFile'),(req,res)=>{
  res.send({
    message:'file upload',
    info:req.file
  })
})
app.listen(3500)