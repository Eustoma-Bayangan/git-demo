const app = require("express")();
const router = require("./routes");

app.use(require("express").urlencoded({ extended: false }));
app.use(router);

app.listen(3000, (_) => console.log("App is running at port", 3000));
