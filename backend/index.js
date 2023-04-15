const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

mongoDB();
app.use(express.json())
app.use('/api/', require("./Routes/CreateUser.js"));
app.get("/", (req, res) => {
  res.send("Hello world")
})


app.listen(port, () => console.log(`Example app listening on port ${port}`));
