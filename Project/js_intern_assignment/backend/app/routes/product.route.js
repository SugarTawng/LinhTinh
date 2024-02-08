/**
 * Created by SugarTawng on 12/6/2023
 */
// our components
const productService = require('../services/product.service');

module.exports = function (app) {
    app.post('/api/v1/products/', productService.create);
    app.get('/api/v1/products/:id', productService.getOne);
    app.get('/api/v1/products/', productService.getAll);
    app.put('/api/v1/products/:id', productService.update);
    app.delete('/api/v1/products/:id', productService.deleteOne);
};
