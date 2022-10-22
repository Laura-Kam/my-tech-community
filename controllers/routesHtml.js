const router = require("express").Router();

const { Post, User } = require("../models");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "title", "date_created", "user_id", "post_paragraph"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const postsSerialized = posts.map((post) => post.get({ plain: true }));
    const obj = { posts: postsSerialized, logged_in: req.session.logged_in };

    console.log(obj);
    res.render("homepage", obj);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Send over the 'loggedIn' session variable to the 'homepage' template

//log in route
router.get("/login", (req, res) => {
  res.render("login");
});

//sign up route
router.get("/signup", (req, res) => {
  res.render("signup");
});

//create new post in homepage.
router.get("/newpost", (req, res) => {
  res.render("post");
});

//signup
router.post("/signup", async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET all posts for dashboard page.
router.get("/dashboard", async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "title", "date_created", "user_id", "post_paragraph"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const postsSerialized = posts.map((post) => post.get({ plain: true }));
    const obj = { posts: postsSerialized, logged_in: req.session.logged_in };

    console.log(obj);
    res.render("dashboard", obj);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//updating user_id when trying to render posts on homepage handlebar.

router.put("/:id", async (req, res) => {
  try {
    updateUserIdInPost = await Post.update(req.user_id, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateUserIdInPost[0]) {
      res.status(404).json({ message: "No user with this id " });
      return;
    }
    res.status(200).json(updateUserIdInPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
