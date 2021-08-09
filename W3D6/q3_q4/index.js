const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
const PRODUCTS = [
  { id: 1, name: "Product 1", description: "Description", price: 5000 },
  { id: 2, name: "Product 2", description: "Description", price: 10000 },
  { id: 3, name: "Product 3", description: "Description", price: 7000 },
];
const CART = [
  { name: "Product 1", price: 3000, quantity: 1 },
  { name: "Product 2", price: 5000, quantity: 2 },
];

app.get("/product/:id", (req, res) => {
  res.render("product", {
    ...PRODUCTS.find((e) => e.id === parseInt(req.params.id)),
  });
});

app.get("/cart", (req, res) => {
  res.render("shoppingcart", {
    products: CART,
  });
});
app.listen(3000);
