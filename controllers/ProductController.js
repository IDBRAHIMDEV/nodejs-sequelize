const Product = require('./../models/product');

exports.getAllProducts = (req, res) => {
   
    Product
        .findAll()
        .then((products) => {

            res.render('index', { listProducts: products })
        })
        .catch(err => console.log(err))

}

exports.storeProduct = (req, res) => {

    let { title, description, price, urlImage } = req.body;

    Product.create({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage
    })
    .then(() => res.redirect('/products'))
    .catch((err) => console.log(err))
   
}

exports.updateProduct = (req, res) => {
    return res.send('modification totale')
}

exports.showOneProduct = (req, res) => {
   
    Product.findByPk(req.params.id)
           .then(product => {
               res.render('show', {
                   product: product
               })
           })
}

exports.deleteProduct =  (req, res) => {
    return res.send('suppression')
}

exports.editProduct =  (req, res) => {
    Product.findByPk(req.params.id)
           .then(product => {
               res.render('edit', {
                   product: product
               })
           })
}

exports.patchProduct = (req, res) => {
    return res.send('modification partielle')
}


exports.createProduct = (req, res) => {
    res.render('create-product')
}