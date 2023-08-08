const brandRoute = require('express').Router()
const brandController = require('../controllers/BrandController')

brandRoute.get('/', brandController.getBrands)

brandRoute.post('/create', brandController.create)

brandRoute.get('/details/:brandId', brandController.getBrandsById)

brandRoute.delete('/delete/:id', brandController.delete)

brandRoute.put('/update/:id', brandController.update)

module.exports = brandRoute