import express from 'express'
import 'dotenv/config.js'
import dbConnect from './confilg/db.js';
const app = express()
const port= process.env.PORT || 3000;



//! server start
app.listen(port,()=>{
    console.log(`server start on port ${port}`)
    dbConnect()
})