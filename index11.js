import express from "express";
const app = express();
app.use("/images",express.static("images"));
app.listen(8080,()=>{
    console.log("SERVER STARTED ON PORT http://localhost:8080/");
})