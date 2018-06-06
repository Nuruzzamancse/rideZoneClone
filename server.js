var express =  require('express');
var mongoose = require('mongoose');
var bodyPaser = require('body-parser');
var cors = require('cors');
var config = require('./config');
let path= require('path');


var app = express();


mongoose.connect(config.database,  (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Databse connected Successfully');
    }
});

app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(bodyPaser.json());

console.log('In the server');

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

app.get('/',(req,res)=>{
    res.send('Foobar');
})

app.listen(PORT, ()=>{
    console.log('Serve has been started at port '+ PORT);
})