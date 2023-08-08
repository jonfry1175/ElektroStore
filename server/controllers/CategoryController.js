const { Category, Product } = require('../models')
const product = require('../models/product')

class CategoryController {
    static getCategory(req, res) {
        Category.findAll({
            include: [
                Product
            ]
        })
            .then((category) => {
                res.status(200).json(category)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        // res.send('categories page')
    }
    static create(req, res) {
        const { name, image } = req.body
        Category.create({
            name,
            image
        })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })

        // res.send('create categories page')
    }

    static getCategoryById(req, res) {
        const id = +req.params.id;
        console.log(req.params)
        Category.findByPk(id)
            .then((result) => {
                result
                    ? res.status(200).json(result)
                    : res.status(400).json({
                        message: `task id ${id} is not found!`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    

    static delete(req, res) {
        const id = Number(req.params.id)
        Category.destroy({
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
        const { name, image } = req.body
        Category.update(
            {
                name,
                image,
            },
            {
                where: { id }
            }
        )
            .then((result) => {
                result[0]
                    ? res.status(201).json({
                        message: `Task id ${id} has been updated!`
                    })
                    : res.status(400).json({
                        message: `Task id ${id} is not defined`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

module.exports = CategoryController;