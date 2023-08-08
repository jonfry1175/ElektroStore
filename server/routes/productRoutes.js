const productRoute = require('express').Router()
const productController = require('../controllers/ProductController')

productRoute.get('/', productController.getProducts)

productRoute.post('/create',productController.create)

productRoute.get('/details/:id', productController.getProductById)

productRoute.delete('/delete/:id', productController.delete)

productRoute.put('/update/:id', productController.update)

module.exports = productRoute;