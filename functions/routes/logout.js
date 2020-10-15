const firebase=require('../utils/configure')

const auth=firebase.auth()

exports.getlogout=async(req,res)=>{
  auth.signOut()
  .then(()=>{
    return res.status(200).json({msg:'User logged out'})
  }).catch(err=>{
    if(err) throw err
  })
}