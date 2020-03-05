const Category = require('./../models/category');

exports.getAllCategories = (req, res) => {
   
    Category
        .findAll()
        .then((categories) => {

            res.render('category/index', { listCategories: categories })
        })
        .catch(err => console.log(err))

}

exports.storeCategory = (req, res) => {

    let { title, active } = req.body;

    Category.create({
        title: title,
        active: active
    })
    .then(() => res.redirect('/categories'))
    .catch((err) => console.log(err))
   
}

exports.updateCategory = (req, res) => {
    console.log(req.body)
    let { title, active } = req.body;

    Category.update({
        title: title,
        active: (active == 'on') ? 1 : 0
    }, {
        where: { id: req.params.id }
    })
    .then(() => res.redirect('/categories'))
    .catch((err) => console.log(err))
}

exports.showOneCategory = (req, res) => {
   
    Category.findByPk(req.params.id)
           .then(category => {
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