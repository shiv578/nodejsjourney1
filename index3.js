import express from "express";
const app = express();
app.listen(8081,()=>{
    console.log("server is running ")
})

app.get("/",(req,res)=>{
    res.send("response from the server for   / ")
    console.log(req.url);
    console.log(req.method);
})

app.get("/home/page1",(req,res)=>{
    res.send("response fprm the server home/ page1")
})