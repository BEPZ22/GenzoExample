const Product = require('../../Model/Product');

module.exports = {
    
    addProductData : async function (req,res){
        const { name, type, price } = req.body
        try {
            const product = new Product({ name: name , type: type, price:price });
            const response = await product.save();
            res.status(200).send(`Usuario creado de manera exitosa ${response}`);
        } catch (error) {
            res.status(404).send(error);
        }
    },

    getProductData : async function (req,res){
        try {
            const products = await Product.find();
            res.status(200).send(JSON.stringify(products));
        } catch (error) {
            res.status(404).send(error);
        }
    }
}