const express = require('express');
const Product = require('./../models/product');

const router = express.Router();

router.get('/products/create', (req, res) => {
    res.render('create-product')
})

router.get('/products', (req, res) => {
   
    Product
        .findAll()
        .then((products) => {

            res.render('index', { listProducts: products })
        })
        .catch(err => console.log(err))

})


router.post('/products', (req, res) => {

    let { title, description, price, urlImage } = req.body;

    Product.create({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage
    })
    .then(() => res.redirect('/products'))
    .catch((err) => console.log(err))
    
    
})

router.put('/products/:id', (req, res) => {
    return res.send('modification totale')
})

router.get('/products/:id', (req, res) => {
   
    Product.findByPk(req.params.id)
           .then(product => {
               res.render('show', {
                   product: product
               })
           })
})

router.patch('/products/:id', (req, res) => {
    return res.send('modification partielle')
})

router.delete('/products/:id', (req, res) => {
    return res.send('suppression')
})

module.exports = router;