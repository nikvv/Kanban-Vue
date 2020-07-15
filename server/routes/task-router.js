const router = require('express').Router()
const TaskController = require('../controllers/task-controller')

router.post('/register',TaskController.create)
router.post('/login',TaskController.login)

module.exports = router;