const router = require('express').Router()
const UserController = require('../controllers/user-controller')

const taskRouter = require('./task-router')

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.use('/tasks',taskRouter)

module.exports = router;