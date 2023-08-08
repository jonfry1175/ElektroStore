const { Product, Category, User, Brand } = require('../models')
// const category = require('../models/category')
// const user = require('../models/user')
// const brand = require('../models/brand')

class ProductController {
    static getProducts(req, res) {
        Product.findAll({
            include: [
                Category,
                User,
                Brand
            ],
            order: [ //supaya id
                [
                    'id', 'asc'
                ]
            ]
        })
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        // res.send('product page')
    }
    static create(req, res) {
        const { BrandId, CategoryId, UserId, name, price, stock, image} = req.body
        Product.create({
            BrandId,
            CategoryId,
            UserId,
            name,
            price,
            stock,
            image
        })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        // res.send('create product page')
    }

    static getProductById(req, res) {
        const id = +req.params.id;
        // console.log(req.params)
        Product.findByPk(id)
            .then((result) => {
                result
                    ? res.status(200).json(result)
                    : res.status(400).json({
                        messsage: `Task id ${id} is not found`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        const id = Number(req.params.id)
        Product.destroy({
            where: { id },
        })
            .then((result) => {
                result === 1
                    ? res.status(200).json({
                        message: `Task id ${id} has been deleted!`
                    })
                    : res.status(400).json({
                        message: `Task id ${id} is not defined!`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const { BrandId, CategoryId, UserId, name, price, stock, image} = req.body
        Product.update(
            {
                BrandId,
                CategoryId,
                UserId,
                name,
                price,
                stock,
                image
            },
            {
                where: { id },
            }
        )
            .then((result) => {
                result[0]
                    ? res.status(201).json({
                        message: `Task id ${id} has been updated!`
                    })
                    : res.status(400).json({
                        message: `Task id ${id} is not defined!`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = ProductController