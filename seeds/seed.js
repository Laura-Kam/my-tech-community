const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");

sequelize.sync({ force: true }).then(() => {
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
});
