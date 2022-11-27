//allows you to use .put/post/get/delete etc. CRUD ops
//these are routing methods - not paths
const router = require("express").Router();

//requiring modals.

const { Post, User } = require("../../models");

//creating a log in after sign up.
//try allows a block of code to be tested, and catch is code for errors.
//async makes a function return a Promise
//await makes a function wait for a Promise

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validatePassword = await userData.checkPassword(req.body.password);

    if (!validatePassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log("Hey Laura see!", userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res.status(200).json({ userData, message: "You are logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//new post route- needs editing- withauth? with user id?
router.post("/newpost", async (req, res) => {
  const body = req.body;

  //solve this!

  console.log(req.session.user_id);
  const newPost = await Post.create({
    ...body,
    user_id: req.session.user_id,
  });
  res.status(200).json(newPost);
  // if (err) {
  //   res.status(404).end();
  // }
});

module.exports = router;
