const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    cookies: req.cookies,
  });
});

app.post("/add", (req, res) => {
  res.cookie(req.body.key, req.body.value);
  res.redirect("/");
});

app.listen(3000, console.log("this is running at port 3000"));
