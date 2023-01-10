const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, (_) => console.log("App is running at port", 3000));
