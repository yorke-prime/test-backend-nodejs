const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const authenticatedUserController = require("../AuthenticatedUser/AuthenticatedUserController");
const auth = require('../../../../services/auth-services');

exports.authenticate = async (request, response) => {
    try {
        const userAuth = await authenticatedUserController.authenticate({
            email: request.body.email,
            password: request.body.password
        })

        console.log(userAuth);

        if (!userAuth) {
            response.status(404).send({error: "usuario ou senha invalidos"});
        }

        const token = await auth.generateToken({
            id: userAuth._id,
            email: userAuth.email,
            name: userAuth.username,
        });

        console.log(token);

        response.status(201).send({
            token: token,
            data: {
                email: userAuth.email,
                name: userAuth.username
            }
        });

    } catch (err) {
        response.status(403).json({ error: "Falha ao Logar", e: err.message });
    }

}