const { User, Product } = require('../models')

class UserController {
    static getUsers(req, res) {
        User.findAll({
            include: [
                Product
            ]
        })
            .then((user) => {
                res.status(200).json(user)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
    static create(req, res) {
        const { username, email, password } = req.body
        User.create({
            username,
            email,
            password,
        })
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        // res.send('create users page')
    }

    static getUserById(req, res) {
        const id = +req.params.userId;
        console.log(req.params);
        User.findByPk(id)
            .then((result) => {
                result
                    ? res.status(200).json(result)
                    : res.status(400).json({
                        message: `Task id ${id} is not found`
                    })
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    }
    static delete(req, res) {
        const id = Number(req.params.id);
        User.destroy({
            where: { id },
        })
            .then((result) => {
                result === 1
                    ? res.status(200).json({
                        message: `Task id ${id} has been deleted!`
                    })
                    : res.status(400).json({
                        message: `task id ${id} is not found!`
                    });
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const { username, email, password } = req.body
        User.update(
            {
                username,
                email,
                password,
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
                        message: `Task id ${id} is not found`
                    })                          
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

}

module.exports = UserController