//requiring dependencies
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const routes = require("./controllers/");
const session = require("express-session");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
//a SQL session store using Sequelize. js
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//object sess created, secret is similar to a password to encrypt token.
const sess = {
  secret: process.env.SECRET,
  //cookie contains info, is client-side that stores information from the session= e.g items in shopping cart.
  cookie: {
    //83 hours
    maxAge: 300000,
    httpOnly: true,
    //Cookie will only be sent when the request is made with HTTPS
    secure: false,
    sameSite: "strict",
  },
  //session is not resaved unless modified.
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//setting up the session
app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
