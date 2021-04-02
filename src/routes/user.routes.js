const { Router } = require('express');

const createUserController = require("../modules/user/useCases/CreateUser/CreateUserController");
const loginUserController = require("../modules/user/useCases/Login/LoginUserController");

const userRoutes = Router();

userRoutes.post("/", createUserController.post);
userRoutes.post("/login", loginUserController.authenticate);

module.exports = userRoutes;