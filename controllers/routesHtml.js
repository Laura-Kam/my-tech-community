const router = require("express").Router();

const { User } = require("../models");

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
