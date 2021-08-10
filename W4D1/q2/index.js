const express = require("express");
const url = require("url");
const path = require("path");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));

app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: "salt for cookie signing",
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/result", (req, res) => {
  req.session.name = req.body.name;
  req.session.age = req.body.age;

  res.redirect(
    url.format({
      pathname: "/output",
    })
  );
});

app.get("/output", function (req, res) {
  let name = req.session.name;
  let age = req.session.age;

  res.send(`Welcome ${name}. Age: ${age}`);
});

app.listen(3000);
