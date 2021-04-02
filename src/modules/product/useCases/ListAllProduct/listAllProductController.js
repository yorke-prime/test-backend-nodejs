const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Product = mongoose.model('Product');

exports.get = async (request, response) => {

    try {
        const products = await Product.find({});

        response.status(200).json(products);
    } catch (err) {
        response.status(500).json({ Erro: 'Produtos não encontrado', error: err.message });
    }
}