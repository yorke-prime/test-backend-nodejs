const { Router } = require('express');

const listAllProductController = require('../modules/product/useCases/ListAllProduct/listAllProductController');
const createProductController = require("../modules/product/useCases/CreateProduct/CreateProductController");
const auth = require('../services/auth-services');

const productRoutes = Router();

productRoutes.get("/", listAllProductController.get);

productRoutes.post("/", auth.authorize ,createProductController.post);

module.exports = productRoutes;