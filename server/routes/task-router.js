const router = require('express').Router()
const TaskController = require('../controllers/task-controller')
const Auth = require('../middlewares/auth')

router.use(Auth.authentication)

router.get('/',TaskController.findAll)
router.post('/',TaskController.create)
router.put('/:id', Auth.authorizationTask, TaskController.edit)
router.delete('/:id', Auth.authorizationTask, TaskController.delete)

module.exports = router;