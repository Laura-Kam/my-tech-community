const router = require("express").Router();

const { Post, User } = require("../models");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "title", "date-created", "user_id", "post_paragraph"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const postsSerialized = posts.map((post) => post.get({ plain: true }));
    const obj = { posts: postsSerialized, logged_in: req.session.logged_in };

    res.render("homepage", obj);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Send over the 'loggedIn' session variable to the 'homepage' template

//log in route
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
