const express = require("express");
const Book = require("../models/book.model.js");
const router = express.Router();
const {
  getBooks,
  getBookById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/book.controller.js");

router.get("/", getBooks);
router.get("/:id", getBookById);

router.post("/", createProduct);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
