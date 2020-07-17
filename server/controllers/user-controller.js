const { User } = require('../models')
const { compare } = require('bcrypt')
const { createToken } = require('../helpers/jwt')

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('1095834707066-qvme6aqcvfm59p0h86oj325i2jierm3e.apps.googleusercontent.com');


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
            next(error)
        }
    }
    static async  verify(req,res,next) {
        const {token} = req.body
        console.log(token)
        const ticket = await client.verifyIdToken({
            
            idToken: token,
            audience: '1095834707066-qvme6aqcvfm59p0h86oj325i2jierm3e.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];

        console.log(`payload`,payload)
        console.log(`userid`,userid)
        
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        const username = payload.name
        const password = `${payload.email}GOOGLELOGIN`
        const { email } = payload
        const newUser = { username, email, password }
        try {
            const checkUser = await User.findOne({ where: { email } })
            if (checkUser !== null) {
                // throw ({ status: 400, msg: 'Email is already registered' })
                const token = createToken({ username: checkUser.username, email: checkUser.email, id: checkUser.id })
                res.status(200).json({ token })

            }
            else {
                await User.create(newUser)
                const token = createToken({ username: checkUser.username, email: checkUser.email, id: checkUser.id })
                res.status(200).json({ token })
            }
        } catch (error) {
            console.log(error)

        }

      }
      
}

module.exports = UserController;