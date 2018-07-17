const express = require("express");
var port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.listen(3000, () => console.log("server started"));
