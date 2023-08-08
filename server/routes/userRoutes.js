const userRoute = require('express').Router()
const userController = require('../controllers/UserController')

userRoute.get('/', userController.getUsers)
userRoute.post('/create', userController.create)
userRoute.get('/details/:userId', userController.getUserById)
userRoute.delete('/delete/:id', userController.delete)
userRoute.put('/update/:id', userController.update)

module.exports = userRoute