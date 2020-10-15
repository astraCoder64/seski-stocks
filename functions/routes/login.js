const {admin,db}=require('../utils/admin')

const firebase=require('../utils/configure')

const auth=firebase.auth()

exports.getlogin=async(req,res)=>{
  res.send('Login Form')
}

exports.postlogin=async(req,res)=>{
  const email=req.body.email
  const password=req.body.password

  auth.signInWithEmailAndPassword(email,password)
  .then(userCred=>{
    return res.status(200).json({msg:`${userCred.user.email} has logged in`})
  }).catch(err=>{
    if(err) 
    res.status(400).json({msg:'Enter valid login details'})
  })
}