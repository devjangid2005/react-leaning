const express = require("express");
const app = express();
require("./db/conn.js");
const cors = require("cors");
const port = 3002;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json("server starts");
});
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
