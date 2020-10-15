const functions = require('firebase-functions');
const express=require('express');
const cors=require('cors');
const {home}=require('./routes/home');
const {user}=require('./routes/user');
const {dashboard}=require('./routes/dashboard');
const {getsignup,postsignup}=require('./routes/signup');
const { getlogout } = require('./routes/logout');
const { getlogin, postlogin } = require('./routes/login');
const {getstocks,deletestocks,updatestocks}=require('./routes/stocks');
const {stockerpro}=require('./routes/mainwatcher');
const app=express();

//Load CORS
app.use(cors({origin:true}));

//Load view engine
app.set('view engine','ejs');

//FORM body parser & JSON validator
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//---------Routes----------
//Home
app.get('/',home)

//Signup
app.get('/signup',getsignup)
app.post('/signup',postsignup)

//Login
app.get('/login',getlogin)
app.post('/login',postlogin)

//Logout
app.get('/logout',getlogout)

//-----Stock details-----

//Get Stock details
app.post('/stocks',getstocks)

//Delete Stock details
app.delete('/stocks',deletestocks)

//Update Stock details
app.put('/stocks',updatestocks)

//User Profile
app.get('/users',user)

//Dashboard 
app.get('/user/dashboard',dashboard)

//Continous function to watch stocks
stockerpro();

exports.stocker=functions.region('asia-south1').https.onRequest(app)

