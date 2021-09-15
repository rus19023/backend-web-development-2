const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("Hello there");
});

router.get("/users", (req, res, next) => {
  const users = [{ username: "braiden" }, { username: "bob" }];
  const { username } = req.query;
  if (username) {
    users.push({ username });
  }

  res.write("<html>");
  res.write("<body>");
  // Form for "./stretch-2 POST request".
  res.write("<form>");
  res.write('<input id="username" type="text" name="username">');
  res.write(`<button type="submit">Submit</button>`);
  res.write("</form>");
  // End tags
  res.write("</body>");
  res.write("</html>");
  res.write("<ul>");

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    res.write(`<li>${user.username}</li>`);
  }
  res.write("</ul>");
  return res.end(); // Remember to end the response!
});

router.post("/create-user", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
