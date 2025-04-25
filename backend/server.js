import express from 'express'
import 'dotenv/config.js'
import dbConnect from './confilg/db.js';
import userRouter from './router/user.router.js';
import bodyParser from 'body-parser';
const app = express()
const port= process.env.PORT || 3000;
//! middleware
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))

 //! server
  app.use("/api/v1/user",userRouter)

//! server start
app.listen(port,()=>{
    console.log(`server start on port ${port}`)
    dbConnect()
})