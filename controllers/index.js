const router = require("express").Router();
const { append } = require("express/lib/response");
const apiRoutes = require("./api");
const routesHtml = require("./routesHtml");

router.use("/", routesHtml);
// router.use("/api", apiRoutes);

module.exports = router;
