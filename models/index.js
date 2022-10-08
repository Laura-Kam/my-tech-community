//required all modules

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//user has many posts

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//posts belong to user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

//comment belongs to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

//user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Comment, Post };
