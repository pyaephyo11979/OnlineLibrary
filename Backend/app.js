require ("dotenv").config()

const express = require ("express");
const app   = express ();
const file_upload = require ("express-fileupload");
const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/BookStore")
.then(()=>console.log("Conncected"))

app.use(file_upload())

let Author = require ("./Routes/Author_Route.js");

app.use("/Author",Author)

app.use((err, req, res, next) => {
    console.error(err);
    let err_obj = {
        err_msg :err
    }
    res.status(500).send(JSON.stringify(err_obj))
  })
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})