const router = require('express').Router()
const TaskController = require('../controllers/task-controller')

router.get('/',TaskController.findAll)
router.post('/',TaskController.create)
router.put('/:id',TaskController.edit)
router.delete('/:id',TaskController.delete)

module.exports = router;