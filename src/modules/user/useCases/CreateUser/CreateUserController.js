const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');
const Validators = require('../../../../validators/index');


exports.post = async (request, response) => {
    try {
        let contract = new Validators();
        contract.isEmail(request.body.email, "Tente um email valido");

        if (!contract.isValid()) {
            response.status(400).send(contract.errors()).end();
            return;
        }

        let user = new User(request.body);
    
        await user.save();

        response.status(201).json(user);
    
    } catch(err) {
        response.status(403).json({ error: "Falha ao cadastrar usuario", e: err.message});
    }
    
}