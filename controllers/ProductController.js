const Product = require('./../models/product');
const Category = require('./../models/category');

exports.getAllProducts = (req, res) => {
   
    Product
        .findAll({ include: [{ model: Category }] })
        .then((products) => {
            console.log(products)
            res.render('product/index', { listProducts: products })
        })
        .catch(err => console.log(err))

}

exports.storeProduct = (req, res) => {

    let { title, description, price, urlImage, category } = req.body;

    Product.create({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage,
        categoryId: category
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
               res.render('product/show', {
                   product: product
               })
           })
}

exports.deleteProduct =  (req, res) => {
    
    let id = req.params.id;

    Product.destroy({ where: { id: id } })
           .then(() => res.redirect('/products'))
           .catch((err) => console.log(err))
}

exports.editProduct =  (req, res) => {
    Product.findByPk(req.params.id)
           .then(product => {
               res.render('product/edit', {
                   product: product
               })
           })
}

exports.patchProduct = (req, res) => {
    return res.send('modification partielle')
}


exports.createProduct = (req, res) => {

    Category.findAll({ where: { active: 1 } })
            .then((categories) => {

                res.render('product/create', { categories: categories })
            })
            .catch((err) => console.log(err))

}