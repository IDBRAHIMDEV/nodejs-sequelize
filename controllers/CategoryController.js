const Category = require('./../models/category');
const Product = require('./../models/product');

exports.getAllCategories = (req, res) => {
   
    Category
        .findAll()
        .then((categories) => {

            res.render('category/index', { listCategories: categories })
        })
        .catch(err => console.log(err))

}

exports.storeCategory = (req, res) => {

    let { title, description, price, urlImage } = req.body;

    Category.create({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage
    })
    .then(() => res.redirect('/Categories'))
    .catch((err) => console.log(err))
   
}

exports.updateCategory = (req, res) => {
    return res.send('modification totale')
}

exports.showOneCategory = (req, res) => {
   
    Category.findByPk(req.params.id, {include: {model: Product}})
           .then(category => {
                console.log(category)
               res.render('category/show', {
                   category: category
               })
           })
}

exports.deleteCategory =  (req, res) => {
    return res.send('suppression')
}

exports.editCategory =  (req, res) => {
    Category.findByPk(req.params.id)
           .then(category => {
               res.render('category/edit', {
                   category: category
               })
           })
}

exports.patchCategory = (req, res) => {
    return res.send('modification partielle')
}


exports.createCategory = (req, res) => {
    res.render('category/create')
}