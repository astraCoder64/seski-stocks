const firebase=require('firebase')

var firebaseConfig = {
  apiKey: "AIzaSyBYKVMWmAl353Ma43Ha_hnbXoJYpoIL_Gs",
  authDomain: "stocker-8a30b.firebaseapp.com",
  databaseURL: "https://stocker-8a30b.firebaseio.com",
  projectId: "stocker-8a30b",
  storageBucket: "stocker-8a30b.appspot.com",
  messagingSenderId: "742562723576",
  appId: "1:742562723576:web:64a91bbf4b986aefee2d0d",
  measurementId: "G-KMP8KND2YP"
};

firebase.initializeApp(firebaseConfig)

module.exports=firebase