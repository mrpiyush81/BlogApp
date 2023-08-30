const express=require('express') ;
const app=express()

require("dotenv").config();
const PORT=process.env.PORT || 3000;

app.use(express.json());

const blog=require("./routes/blog")

app.use("/api/v1",blog);

const connectwithdb=require("./config/database");
connectwithdb();

app.listen(PORT,()=>{
   console.log("app run succesfully");
})

app.get('/',(req,res)=>{
  res.send(`<h1>home page of web</h1>`)
})