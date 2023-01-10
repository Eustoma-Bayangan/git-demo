const app = require("express")();

app.get("/", (_, res) => res.send("Gimana nih pak?"));

app.listen(3000, (_) => console.log("App is running at port", 3000));
