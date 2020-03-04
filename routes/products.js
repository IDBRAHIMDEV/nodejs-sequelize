const express = require('express');
const ProductController = require('./../controllers/ProductController');

const router = express.Router();

router.get('/products/create', ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.storeProduct);
router.put('/products/:id', ProductController.updateProduct);
router.get('/products/:id/edit', ProductController.editProduct)
router.get('/products/:id', ProductController.showOneProduct)
router.patch('/products/:id', ProductController.patchProduct)
router.delete('/products/:id', ProductController.deleteProduct)

module.exports = router;