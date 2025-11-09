import express from "express";
import sqlite3 from "sqlite3";

sqlite3.verbose();
const router = express.Router();

// ✅ Open SQLite DB
const db = new sqlite3.Database("./Products.db", (err) => {
  if (err) console.error("Database Connection Error:", err.message);
  else console.log("✅ Products DB Connected");
});

// Get all products
router.get("/products", (req, res) => {
  const {
    search_q = "",
    category = "All",
    order_by = "id",
    order = "ASC",
  } = req.query;

  let query = `SELECT * FROM Products`;
  const params = [];

  if (category !== "All" && category.trim() !== "") {
    query += ` WHERE category LIKE ?`;
    params.push(`%${category}%`);
  }

  query += ` ORDER BY ${order_by} ${order}`;

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.status(500).json({ error: "Failed to retrieve products" });
    }
    res.status(200).json(rows);
  });
});



export default router;
