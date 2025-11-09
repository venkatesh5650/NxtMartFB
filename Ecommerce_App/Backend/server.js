import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import dotenv from "dotenv";
import productData from "./src/data/products.js";

dotenv.config();
sqlite3.verbose();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Optional: explicit preflight support
// app.options("/*", cors());

app.use(express.json());

// ✅ Connect DB
const db = new sqlite3.Database("./Products.db", (err) => {
  if (err) console.error("❌ DB Connection Error:", err.message);
  else console.log("✅ SQLite DB Connected");
});

// ✅ Create Users Table
db.run(
  `CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) console.error("❌ Error creating Users table:", err.message);
  }
);

// ✅ Create Products Table
db.run(
  `CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT,
    quantity TEXT,
    price REAL NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) console.error("❌ Error creating Products table:", err.message);
  }
);

// ✅ Reset & Insert Products
// ✅ Insert sample products **only if table is empty**
db.get("SELECT COUNT(*) AS count FROM Products", (err, row) => {
  console.log("🧹 Clearing Products table...");
  db.run("DELETE FROM Products"); // ✅ <-- ADD THIS LINE

  console.log("📦 Reinserting sample products...");
  const insertQuery = `INSERT INTO Products (name, category, price, quantity, image_url)
                       VALUES (?, ?, ?, ?, ?)`;

  productData.forEach((item) => {
    db.run(insertQuery, [
      item.name,
      item.category,
      item.price,
      item.quantity,
      item.image_url,
    ]);
  });

  console.log("✅ Products refreshed with updated images");
});

// ✅ Routes
import authRouter from "./src/routers/auth.js";
import productRouter from "./src/routers/api.js";

app.use("/auth", authRouter);
app.use("/api", productRouter);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
