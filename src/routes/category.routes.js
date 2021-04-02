const { Router } = require('express');

const createCategoryController = require('../modules/category/useCases/CraeteCategory/CreateCategoryController');
const listAllCategoriesController = require("../modules/category/useCases/ListAllCategory/ListAllCategoriesController");

const categoryRoutes = Router();

categoryRoutes.get("/", listAllCategoriesController.get);

categoryRoutes.post("/", createCategoryController.post);

module.exports = categoryRoutes;