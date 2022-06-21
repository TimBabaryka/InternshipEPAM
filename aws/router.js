const Express = require("express");

const router = Express.Router();

router.get("/", function (req, res) {
  res.send("get all");
});

router.get("/:id", function (req, res) {
  const { id } = req.params;
  res.send(`get ${id}`);
});

router.use("*", function (req, res) {
  res.status(400).send(`not found`);
});

module.exports = router;
