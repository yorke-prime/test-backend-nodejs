const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Category = mongoose.model('Category');

exports.get = async (request, response) => {

    try {
        const categories = await Category.find({});

        response.status(200).json(categories);
    } catch (err) {
        response.status(500).json({ Erro: 'Produtos não encontrado', error: err.message });
    }
}