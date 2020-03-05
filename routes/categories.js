const express = require('express');
const CategoryController = require('./../controllers/CategoryController');

const router = express.Router();

router.get('/create', CategoryController.createCategory);
router.get('', CategoryController.getAllCategories);
router.post('', CategoryController.storeCategory);
router.post('/:id', CategoryController.updateCategory);
router.get('/:id/edit', CategoryController.editCategory)
router.get('/:id', CategoryController.showOneCategory)
router.patch('/:id', CategoryController.patchCategory)
router.delete('/:id', CategoryController.deleteCategory)

module.exports = router;