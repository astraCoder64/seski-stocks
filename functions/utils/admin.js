const admin=require('firebase-admin');
const firebase =require('./configure')
//Initialize a firebase-admin 
admin.initializeApp()

const db=admin.firestore()


module.exports={admin,db};