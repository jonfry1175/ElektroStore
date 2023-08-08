const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello World!')
})

const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const brandRoutes = require('./brandRoutes') 
const categoryRoutes = require('./categoryRoutes')
route.use("/users", userRoutes)
route.use('/products', productRoutes)
route.use("/brands", brandRoutes)
route.use('/categories', categoryRoutes)





module.exports = route