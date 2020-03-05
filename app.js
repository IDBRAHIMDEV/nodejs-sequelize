const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const products = require('./routes/products');
const categories = require('./routes/categories');
const connection = require('./config/database');
const Product = require('./models/product');
const Category = require('./models/category');
const User = require('./models/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(products)
app.use(categories)

// app.use('/create-course', (req, res, next) => {
//    res.send('<form action="/course" method="post"><input name="title"><button type="submit">Add course</button></form>')
// });

// app.use('/course', (req, res, next) => {
//     console.log(req)
//     res.send('<h1>store course</h1>')
//  });


//  app.use('/', (req, res) => {
//     res.send('<h1>List courses</h1>')
// })

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Product);
Product.belongsTo(User);

connection.sync()
          .then(result => {

              app.listen(5000, () => console.log('Server ON'))
          })
          .catch((err) => {
              console.log('error: ', err)
          })
