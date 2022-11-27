//require router
const router = require("express").Router();
//require post and user models
const { Post, User } = require("../../models");
//require authentification.
const withAuth = require("../../utils/auth");

//router needed to render logged in user's previous posts.
//need user id.

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
    res.redirect("/login");
  }
});
//export router
module.exports = router;
