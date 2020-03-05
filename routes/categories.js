const express = require('express');
const CategoryController = require('./../controllers/CategoryController');

const router = express.Router();

router.get('/categories/create', CategoryController.createCategory);
router.get('/categories', CategoryController.getAllCategories);
router.post('/categories', CategoryController.storeCategory);
router.post('/categories/:id', CategoryController.updateCategory);
router.get('/categories/:id/edit', CategoryController.editCategory)
router.get('/categories/:id', CategoryController.showOneCategory)
router.patch('/categories/:id', CategoryController.patchCategory)
router.delete('/categories/:id', CategoryController.deleteCategory)

module.exports = router;