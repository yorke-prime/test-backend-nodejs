const express = require('express');

const app = express();
const productRoutes = require("./routes/product.routes");
const categoryRoutes = require("./routes/category.routes");
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);

module.exports = app;

