const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname, '../views'));

const paymentController = require('../controllers/paymentController');

app.get('/', paymentController.renderProductPage);
app.post('/createOrder', paymentController.createOrder);

module.exports = app;