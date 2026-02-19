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

app.get("/:x/:y/:b/:c", (req, res) => {
  res.send("hello student")
});


// import express from "express";

// const app = express();

// app.listen(8080, () => console.log("Server started"));

// app.use((req, res) => {
//     res.send("hello student");
// });
