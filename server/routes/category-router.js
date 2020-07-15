const router = require('express').Router()
const CategoryController = require('../controllers/category-controller')

router.get('/',CategoryController.findAll)
router.post('/',CategoryController.create)
router.put('/:id',CategoryController.edit)
router.delete('/:id',CategoryController.delete)

module.exports = router;