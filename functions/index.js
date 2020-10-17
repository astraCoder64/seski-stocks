const functions = require('firebase-functions');
const express=require('express');
const cors=require('cors');
const {dashboard,deleteuser}=require('./routes/user');
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

//Dashboard 
app.get('/user/dashboard',dashboard)
app.delete('/user',deleteuser)

//Continous function to watch stocks
stockerpro();

exports.stocker=functions.region('asia-south1').https.onRequest(app)

