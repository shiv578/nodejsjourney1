// import express from "express";

// const app = express();

// app.listen(8080, () => console.log("Server started"));

// app.get("/:a/:b", (req, res) => {
//     const sum = +req.params.a + +req.params.b;
//     res.send(sum.toString());
// });

import express from "express";

const app = express();

app.listen(8080, () => console.log("Server started"));

app.get("/x/:a/y/:b/z/:c", (req, res) => {
    const sum = +req.params.a + +req.params.b + +req.params.c;
    res.send(sum.toString());
});
