/**
 * Created by SugarTawng on 12/6/2023
 */
// third party components
const Rest = require('../utils/restware');
const Product = require('../models/product.model');

module.exports = {
    create: function (req, res) {
        let data = req.body || '';
        try {
            let oNewProduct = new Product();
            oNewProduct.id = data.id;
            oNewProduct.image = data.image;
            oNewProduct.name = data.name;
            oNewProduct.description = data.description;
            oNewProduct.price = data.price;
            oNewProduct.color = data.color;
            oNewProduct.save(function (error) {
                if (error) {
                    console.log(error);
                    return Rest.sendError(res, 7, 'create_user_fail', 400, error);
                }
                let oResData = {};
                oResData.id = oNewProduct._id;
                console.log(oResData);
                return Rest.sendSuccess(res, oResData, 200);
            });
        }catch(error){
            console.log(error);
            return Rest.sendError(res, 7, 'create_product_fail', 400, error);
        }
    },

    getOne: function (req, res) {
        let id = req.params.id || '';
        let query = {};
        let options = {'createdAt': 0};
        query.id = id;

        try {
            Product.findOne(query, options, function (error, product) {
                if (error) {
                    return Rest.sendError(res, 420, error, 400, null);
                }
                if(!product){
                    return Rest.sendError(res, 420, 'unavailable', 400, null);
                }else{
                    return Rest.sendSuccess(res, product, 200);
                }
            });
        } catch(error){
                return Rest.sendError(res, 420, 'get_one_fail', 400, error);
        }
    },
    getAll: function (req, res) {
        try {
          Product.find({}, function (error, products) {
            if (error) {
              return Rest.sendError(res, 420, error, 400, null);
            }
            if (!products || products.length === 0) {
              return Rest.sendError(res, 420, 'No products found', 400, null);
            } else {
              return Rest.sendSuccess(res, products, 200);
            }
          });
        } catch (error) {
          return Rest.sendError(res, 420, 'get_all_fail', 400, error);
        }
      },
    update: function (req, res) {
        let productId = req.params.id || '';
        let updateData = req.body || {};
        try {
          Product.findOne({ id: productId }, function (error, product) {
            if (error) {
              console.log(error);
              return Rest.sendError(res, 7, 'update_product_fail', 400, error);
            }
      
            if (!product) {
              return Rest.sendError(res, 7, 'product_not_found', 400, null);
            }
      
            // Update the product fields
            product.id = updateData.id || product.id;
            product.image = updateData.image || product.image;
            product.name = updateData.name || product.name;
            product.description = updateData.description || product.description;
            product.price = updateData.price || product.price;
            product.color = updateData.color || product.color;
      
            // Save the updated product
            product.save(function (error) {
              if (error) {
                console.log(error);
                return Rest.sendError(res, 7, 'update_product_fail', 400, error);
              }
      
              let responseData = {
                id: product._id,
                // Include other fields if needed
              };
      
              return Rest.sendSuccess(res, responseData, 200);
            });
          });
        } catch (error) {
          console.log(error);
          return Rest.sendError(res, 7, 'update_product_fail', 400, error);
        }
    },

    deleteOne: function (req, res) {
        let productId = req.params.id || '';

        try {
          Product.findOneAndDelete({ id: productId }, function (error, deletedProduct) {
            if (error) {
              return Rest.sendError(res, 420, error, 400, null);
            }
            if (!deletedProduct) {
              return Rest.sendError(res, 420, 'product_not_found', 400, null);
            } else {
              let responseData = {
                id: deletedProduct._id,
                // Include other fields if needed
              };
              return Rest.sendSuccess(res, responseData, 200);
            }
          });
        } catch (error) {
          return Rest.sendError(res, 420, 'delete_one_fail', 400, error);
        }
    }   
}
