const { User, Task } = require('../models')
const { verifyToken } = require('../helpers/jwt')
const e = require('express')
class Auth {
      static async authentication(req, res, next) {
            const { access_token } = req.headers
            const decoded = verifyToken(access_token)
            try {
                  const checkUser = await User.findOne({ where: { email: decoded.email } })
                  if (!checkUser) {
                        throw ({ status: 401, msg: 'Invalid access credential, please login first!' })
                  }
                  else {
                        req.userData = decoded
                        next()
                  }
            } catch (error) {
                  next(error)
            }

      }

      static async authorizationTask(req, res, next) {
            const { access_token } = req.headers
            const decoded = verifyToken(access_token)
            const id = req.params.id
            try {
                  const checkTask = await Task.findByPk(id)
                  if (!checkTask) {
                        throw ({ status: 404, msg: 'Task not found.' })
                  }
                  else {
                        if (decoded.id === checkTask.user_id) {
                              next()
                        }
                        else {
                              throw ({ status: 403, msg: 'You are not authorized to do this!' })
                        }
                  }
            } catch (error) {
                  next(error)
            }

      }
}

module.exports = Auth;