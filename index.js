var express=require("express");
var config=require('./config');
var path = require('path');
var bodyParser=require('body-parser');
var app = express();
var user = require('./routes/user');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/', function(req,res,next){
    res.status(200).json({
        message:'It works'
    })
});
app.use(function(req, res, next){
  next();
});
var router=express.Router();
router.get('/', function(req,res,next){
    res.status(200).json({
        message:'Welcome to Node Mongodbapp'
    })
});



app.use(function(req,res,next){
    console.log("");
    console.log("------------------------------------------------------------------------------------");
    console.log("------------------------------------------------------------------------------------");
    console.log(req.method+" "+req.originalUrl);
    next();
});

router.use('/',user);

app.use('/',router);

app.use(function(req, res, next){
    var err= new Error('Endpoint not found');
    res.status(400).json({
        message:'Endpoint not found'
    })
});
app.use(function(err, req, res, next){
    res.status(err.status || 500).json({
        message: err.message
    })
    
});


console.log("Server started");
app.listen(3002,'localhost');
