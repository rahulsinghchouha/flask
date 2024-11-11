const express = require("express");
const dbConnect = require("./utils/dbConnect");
const userRoute = require("./router/user");
const cors = require("cors");
const path = require("path");
const flash = require('connect-flash');
const session  = require('express-session')


const app = express();
dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:['Content-Type','Authorization'],
    credentials: true
}))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//serve static file
app.use(express.static(path.join(__dirname,'public')));

app.use(session({
    secret:'your_secret_key', //use your secure key
    resave:false,
    saveUninitialized:true
}))

app.use(flash());

//middleware to expose flash message to view
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

app.get('/',(req,res)=>{

    res.render('index',{title:'Home Page'}); //render the index view
   
})
app.listen(4000,(req,res)=>{
    console.log("I am listening on 4000");
})
app.use("/user",userRoute);

