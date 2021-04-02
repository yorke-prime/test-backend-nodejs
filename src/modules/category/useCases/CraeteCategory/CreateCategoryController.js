const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Category = mongoose.model('Category');

exports.post = async (request, response) => {
    try {

        let category = new Category(request.body);
    
        await category.save();

        response.status(201).json(category);
    
    } catch(err) {
        response.status(403).json({ error: "Falha ao cadastrar produto", e: err.message});
    }
    
}