import express from 'express'
const app = express();

app.listen(8080,()=>{
    console.log("server started")
})

app.get("/", (req,res)=>{
   res.send("Welcome to server")
})

app.get("/home",(req,res)=>{
   res.send("home page")
});

app.get("/id/:id/email/:email",(req,res)=>{
   res.send(req.params.id + " " + req.params.email)
});

app.get("/:id/:email",(req,res)=>{
   res.send(req.params.id + " " + req.params.email)
});

app.get("/:id",(req,res)=>{
   res.send(req.params.id)
});
