const express = require("express");
const path = require("path");
const url = require("url");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "salt for cookie signing",
  })
);

const PRODUCTS = [
  { id: 1, name: "Product 1", description: "Description", price: 3000 },
  { id: 2, name: "Product 2", description: "Description", price: 5000 },
  { id: 3, name: "Product 3", description: "Description", price: 7000 },
];

app.use(function (req, res, next) {
  if (!req.session.cart) {
    req.session.cart = {};
  }
  next();
});

app.get("/product/1", (req, res) => {
  res.render("product", {
    ...PRODUCTS.find((e) => e.id === 1),
  });
});

app.get("/product/2", (req, res) => {
  res.render("product", {
    ...PRODUCTS.find((e) => e.id === 2),
  });
});

app.get("/product/3", (req, res) => {
  res.render("product", {
    ...PRODUCTS.find((e) => e.id === 3),
  });
});

app.post("/addToCart", (req, res, next) => {
  let item = req.body;

  let exist = req.session.cart[item.name];
  if (exist) {
    exist.quantity += 1;
  } else {
    item.quantity = 1;
    req.session.cart[item.name] = item;
  }

  res.redirect(
    url.format({
      pathname: "/cart",
    })
  );
});

app.get("/cart", (req, res, next) => {
  res.render("shoppingcart", {
    products: req.session.cart,
  });
});

app.listen(3000);
