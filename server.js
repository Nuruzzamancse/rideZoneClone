var express = require('express');
var path = require('path');
var cors = require('cors');
var passport = require('passport');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var config = require('./config/database');

mongoose.connect(config.database, (err)=>{
    if(err)
    console.log(err);
else
console.log('Database connected successfully');
})


const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

var productRoute = require('./routes/product');
app.use('/product', productRoute);

var userRoute = require('./routes/user');
app.use('/user', userRoute);

var authRoute = require('./routes/auth');
app.use('/auth', authRoute);

var categoryRouter = require('./routes/category');
app.use('/category',categoryRouter);

var stripe = require('./routes/stripe');
app.use('/stripe', stripe);

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(PORT, ()=>{
    console.log('Serve has been started at port '+ PORT);
})
