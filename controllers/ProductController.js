const Product = require('./../models/product');
const Category = require('./../models/category');

exports.getAllProducts = (req, res) => {
   
    Product
        .findAll({ include: [{ model: Category }] })
        .then((products) => {
            console.log(products)
            res.status(200).json({ error: false, data: products })
        })
        .catch(err => res.status(404).json({error: true, message: 'products not found!'}))

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
    .then((product) => res.status(201).json({error: false, data: product}))
    .catch((err) => res.status(400).json({error: true, message: 'Bad request !'}))
   
}

exports.updateProduct = (req, res) => {
    return res.send('modification totale')
}

exports.showOneProduct = (req, res) => {
   
    Product.findByPk(req.params.id)
           .then(product => {
               res.status(200).json({ error: false, data: product })
           })
           .catch(err => res.status(404).json({error: true, message: 'product not found !'})) 
}

exports.deleteProduct =  (req, res) => {
    
    let id = req.params.id;

    Product.destroy({ where: { id: id } })
           .then(() => res.status(204).json({}))
           .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete this resource !' }))
}

// exports.editProduct =  (req, res) => {
//     Product.findByPk(req.params.id)
//            .then(product => {
//                res.render('product/edit', {
//                    product: product
//                })
//            })
// }

exports.patchProduct = (req, res) => {
    return res.send('modification partielle')
}


// exports.createProduct = (req, res) => {

//     Category.findAll({ where: { active: 1 } })
//             .then((categories) => {

//                 res.render('product/create', { categories: categories })
//             })
//             .catch((err) => console.log(err))

// }