
import express from 'express';
const app = express();
app.listen(8080);
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1]; 
    if (token === "1234") {
        req.token = token;   // store token in request
        next();
    } else {
        res.send("invalid token");
    }
};
app.post("/dashboard", auth, (req, res) => {
    res.send({
        message: "Access granted",
        token: req.token
    });
});
