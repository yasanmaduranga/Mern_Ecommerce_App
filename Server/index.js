const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require('dotenv');

const authRoutes = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const shoppingProductsRouter = require("./routes/shop/product-routes");
const shopCartRouter = require("./routes/shop/cart-routes");


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const mongoUrl = process.env.MONGOURL;

mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shoppingProductsRouter);
app.use("/api/shop/cart", shopCartRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));