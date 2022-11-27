const router = require("express").Router();
const userRoutes = require("./userRoutes");
const dashboardRoutes = require("./dashboard");

//when put in the index.js file inside API this means they first go inside this folder
//then into userRoutes.
//inside api folder so - api/users/whatever is inside user routes.
router.use("/users", userRoutes); //api/users/login or logout etc
router.use("/dashboard", dashboardRoutes); //api/dasbhboard (API is from root folder index.js)

module.exports = router;
