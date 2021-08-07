const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
const path = require("path");
app.use("/css", express.static(path.join(__dirname, "css")));
const getHour = () => {
  const date = new Date();
  return date.getHour();
};
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="css/${
              getHour > 6 && getHour < 18 ? "day.css" : "night.css"
            }" />
            <title>Form</title>
        </head>
        <body>
            <form method="POST" action="/result">
              <label>Name</label>
              <input type="text" name="name" />
             <label>Age</label>
              <input type="text" name="age"/>
               <input type="submit" name="Submit Query" />
            </form>
        </body>
    </html>
    `);
});

app.post("/result", (req, res) => {
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get("/output", (req, res) => {
  res.send(`Welcome ${req.query.name} and age is ${req.query.age}`);
});

app.listen(3000);
