const express =require('express')
const {admin,db}=require('../utils/admin')
const firebase=require('../utils/configure')

exports.dashboard= async(req,res)=>{
  try
  {
    const email=req.body.email;

  await db.doc(`users/${email}`).get()
  .then(doc=>{
    if(doc.exists)
    {
      return res.status(200).json(doc.data());
    }
    else
    {
      return res.status(400).json({'message':"user doesn't exist"});
    }
  })
  .catch(err=>{
    console.log("Something went wrong");
    console.error(err)
  })
  }
  catch(err)
  {
    console.log(err);
    res.status(500).send("Internal server error");
  }
}

exports.deleteuser = async(req,res)=>{
 console.log("USer");
}