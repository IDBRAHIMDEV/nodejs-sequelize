const express = require('express');

const router = express.Router();

const products = [];

router.get('/products/create', (req, res) => {
    res.render('create-product')
})

router.get('/products', (req, res) => {
    res.render('index', { listProducts: products })
})


router.post('/products', (req, res) => {

    products.push(req.body)
    
    res.redirect('/products');
    
})

router.put('/products/:id', (req, res) => {
    return res.send('modification totale')
})

router.patch('/products/:id', (req, res) => {
    return res.send('modification partielle')
})

router.delete('/products/:id', (req, res) => {
    return res.send('suppression')
})

module.exports = router;