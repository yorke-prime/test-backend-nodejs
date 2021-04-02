const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Product = mongoose.model('Product')

exports.post = async (request, response) => {
    try {
        /* const { title, description, price, category } = request.body; */

        let product = new Product(request.body);
    
        await product.save();

        response.status(201).json(product);
    
    } catch(err) {
        response.status(201).json({ error: "Falha ao cadastrar produto", e: err.message});
    }
    
}