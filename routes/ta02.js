//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require("express");
const router = express.Router();
const users = [];
router.get("/", (req, res, next) => {
  res.render("pages", {
    title: "Team Activity 02",
    path: "/ta02", // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users
  });
});

router.get("/form", (req, res, next) => {
  console.log(users);
  res.render("pages/ta02", { path: "/form", users, title: "form" });
});

router.post("/addUser", (req, res, next) => {
  const { username } = req.body;
  users.push({ username });
  res.redirect("/");
});

module.exports = router;
