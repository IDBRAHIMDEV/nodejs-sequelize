const express = require('express');
const ProductController = require('./../controllers/ProductController');

const router = express.Router();

//router.get('/create', ProductController.createProduct);
router.get('', ProductController.getAllProducts);
router.post('', ProductController.storeProduct);
router.put('/:id', ProductController.updateProduct);
//router.get('/:id/edit', ProductController.editProduct)
router.get('/:id', ProductController.showOneProduct)
router.patch('/:id', ProductController.patchProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router;