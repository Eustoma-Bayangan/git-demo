const router = require("express").Router();

router.get("/", (_, res) => res.send("Gimana nih, pak?"));

module.exports = router;
