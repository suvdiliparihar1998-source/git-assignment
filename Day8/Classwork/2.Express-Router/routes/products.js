const express = require("express");
const router = express.Router();

// Sample data
let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST new product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id),
  );
  if (productIndex === -1)
    return res.status(404).json({ message: "Product not found" });
  products.splice(productIndex, 1);
  res.json({ message: "Product deleted" });
});

module.exports = router;
