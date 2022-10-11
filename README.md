# Title of Project: My Tech Community

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents:

- [Username](#username)
- [Project Description](#description)
- [License](#license)
- [Command to install](#command-to-install)
- [Instructions for users](#instructions-for-users-of-the-app)
- [Features of the project](#features-of-the-project)
- [Link to GitHub Repo](#Link-to-Git-hub-repo.)
- [Screenshot of Application](#Screenshot-of-Application)
- [Bugs](#bugs)
- [Version History](#Version-history)
- [Link to deployed Heroku App](#Link-to-deployed-Heroku-App)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)

## Username

    Laura-Kam

## Description

The motivation behind this project was to build a blog website where developers can help each other with their tech queries.

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions.

GIVEN a CMS-style blog site

WHEN I visit the site for the first time

- THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
  WHEN I click on the homepage option
- THEN I am taken to the homepage
  WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
  WHEN I choose to sign up
- THEN I am prompted to create a username and password
  WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
  WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
  WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
  WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
  WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
  WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
  WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
  WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
  WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
  WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
  WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
  WHEN I am idle on the site for more than a set time
- THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## License

MIT

## Command to install

npm i.

## Instructions for users of the app

Clone the application, install dependencies: Express, express-handlebars, express-session, MySQL2, Dotenv, Sequelize, connect-session-sequelize and bcrypt.package. Run the schema and then seeds.sql files. Seeding can be done through 'npm run seed' Then run the app using node server.js using 'npm start'.

## Features of the project

The project aims to allow users to view the homepage of previous comments. When a user signs up with their email and password, they can then log in and write their own posts on the dashboard and comment on others.

## Link to Git-hub repo.

[Link to repo](https://github.com/Laura-Kam/my-tech-community)

## Screenshot of application:

[Screenshot of website](https://github.com/Laura-Kam/my-tech-community/issues/1#issue-1402258567)

## Bugs

- The handlebars were not connected to the database.
- Connection failed to work. Resolved.
- The post modal was not referencing to the user_id, as the relationship was not established.
- Sign-up not complete.
- Not able to post comments.

## Version history

- 0.1 .env file configured, dependencies installed.
- 0.2 Created connection and finished models and seeds.
- 0.3 Created handlebars.
- 0.4 Created routes.

# Link to deployed Heroku App

- [Deployed Heroku App My Tech Community ](https://stormy-hollows-37684.herokuapp.com)

## How to contribute

Git clone the repo, work on the code, then make a pull request.

## Questions

If you have any questions, or would like to get in touch find me on GitHub [Laura-Kam](https://github.com/Laura-Kam)
or email me at laura_ek@yahoo.co.uk.
