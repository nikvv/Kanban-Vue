const router = require('express').Router()
const UserController = require('../controllers/user-controller')

const taskRouter = require('./task-router')
const categoryRouter = require('./category-router')

router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.post('/google-login',UserController.verify)
router.use('/tasks',taskRouter)
router.use('/categories',categoryRouter)

module.exports = router;