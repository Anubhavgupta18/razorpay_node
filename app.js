require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

http.listen(5002, function(){
    console.log(`Server is running PORT:5002`);
});