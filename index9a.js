import express from 'express';
const app=express();
app.listen(8080);


// first method.................
// const auth=(req,res,next)=>{
//      const id = Number(req.params.id);
//     if(id===1234){
//         next();
//     }else{
//         res.send("access denied")
//     }
// }


// 2nd method.......................
// auth middleware using req.url
const auth = (req, res, next) => {
    if (req.url === "/1234") {
        next();   // allow
    } else {
        res.send("access denied");
    }
};

app.get("/1234",auth,(req,res)=>{
     res.send("welcome");

})