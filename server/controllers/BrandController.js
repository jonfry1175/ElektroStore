const { Brand, Product } = require('../models')
// const category = require('../models/category')

class BrandController {
    static getBrands(req, res) {
        Brand.findAll({
            include: [
                Product
            ]
        })
            .then((brand) => {
                res.status(200).json(brand)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        // res.send('Brand Page')
    }

    static create(req, res) {
        const { name, image } = req.body
        Brand.create({
            name,
            image
        })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        // res.send('create Brand page')
    }

    static getBrandsById(req, res) {
        const id = +req.params.brandId
        console.log(req.params)
        Brand.findByPk(id)
            .then((result) => {
                result
                    ? res.status(200).json(result)
                    : res.status(400).json({
                        message: `Task id ${id} is not found`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        const id = Number(req.params.id);
        Brand.destroy({
            where: { id },
        })
            .then((result) => {
                result === 1
                    ? res.status(200).json({
                        message: `Task id ${id} has been deleted`
                    })
                    : res.status(400).json({
                        message: `Task id ${id} is not found `
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        const id = Number(req.params.id)
        const { name, image } = req.body
        Brand.update(
            {
                name,
                image,
            },
            {
                where: { id }
            }
        )
        .then((result) => {
            result[0]// 0 = index ke 0, hasil update
                ? res.status(201).json({
                    message: `Task id ${id} has been updated!`
                })
                : res.status(400).json({
                    message: `Task id ${id} is not found`
                })
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }
}

module.exports = BrandController