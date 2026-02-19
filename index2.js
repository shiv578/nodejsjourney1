import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("response from the server");
  res.send("Hello Shivam 🚀");
});

app.listen(8081, () => {
  console.log("server is started");
});
