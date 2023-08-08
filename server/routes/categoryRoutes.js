const categoryRoute = require('express').Router()
const categoryController = require('../controllers/CategoryController')

categoryRoute.get('/', categoryController.getCategory)
categoryRoute.post('/create', categoryController.create)
categoryRoute.get('/details/:id', categoryController.getCategoryById)
categoryRoute.delete('/delete/:id', categoryController.delete)
categoryRoute.put('/update/:id', categoryController.update)

module.exports = categoryRoute