const {admin,db}=require('../utils/admin');
const firebase=require('../utils/configure');
const {validateSignupData}=require('../utils/validators');

const auth=firebase.auth()

exports.getsignup=async(req,res)=>{
    res.send("Signup page");
}

exports.postsignup= async(req,res)=>{
    const newUser={
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        name:req.body.name,
        mobile:req.body.mobile
    }
    const { valid, errors } = validateSignupData(newUser);

  if (!valid) {return res.status(400).json(errors);}

  auth.createUserWithEmailAndPassword(newUser.email,newUser.password)
  .then(userCred=>{
      return db.doc(`users/${userCred.user.email}`).set({
          email:newUser.email,
          name:newUser.name,
          mobile:newUser.mobile,
          addedAt:new Date().toISOString(),
          stock_data: []
      })
  }).then(()=>{
    return res.status(201).json({msg:`User ${newUser.email} created successfully`})
  }).catch(err=>{
      console.log(`Bad Request : ${err.message}`)
  })

}
