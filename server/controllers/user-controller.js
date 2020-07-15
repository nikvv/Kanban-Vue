const { User } = require('../models')
const { compare } = require('bcrypt')
const { createToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        const { username, email, password } = req.body
        const newUser = { username, email, password }
        try {
            const checkUser = await User.findOne({ where: { email } })
            if (checkUser) {
                throw ({ status: 400, msg: 'Email is already registered' })
            }
            else {
                await User.create(newUser)
                res.status(201).json({ msg: `${username} successfully registered!` })
            }
        } catch (error) {
            console.log(error)

        }

    }

    static async login(req, res, next) {
        const { email, password } = req.body

        try {
            const checkUser = await User.findOne({ where: { email } })
            if (!checkUser) {
                throw ({ status: 404, msg: 'Email not found.' })
            }
            else {
                const match = compare(password, checkUser.password)
                if (!match) {
                    throw ({ status: 400, msg: 'Email or password is invalid.' })
                }
                else {
                    const token = createToken({ username: checkUser.username, email: checkUser.email, id: checkUser.id })
                    res.status(200).json({ token })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserController;