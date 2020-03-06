const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//import routes
const products = require('./routes/products');
const categories = require('./routes/categories');
const users = require('./routes/users');

//Connection with MySQL
const connection = require('./config/database');

//Models
const Product = require('./models/product');
const Category = require('./models/category');
const User = require('./models/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use('/products',products)
app.use('/categories',categories)
app.use('/users',users)

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

Product.belongsTo(Category)
Category.hasMany(Product)

User.hasMany(Product);
Product.belongsTo(User);

connection.sync()
          .then(result => {

              app.listen(5000, () => console.log('Server ON'))
          })
          .catch((err) => {
              console.log('error: ', err)
          })
