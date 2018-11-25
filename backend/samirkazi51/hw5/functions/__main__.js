const admin = require('firebase-admin')
const firebase = require('firebase')
firebase.initializeApp({
    apiKey: "AIzaSyDIm5IL6HBfzKfYF3pz4-PPkgGGE5WeEmw",
    authDomain: "hackwestern5-b0d71.firebaseapp.com",
    databaseURL: "https://hackwestern5-b0d71.firebaseio.com",
    projectId: "hackwestern5-b0d71",
    storageBucket: "hackwestern5-b0d71.appspot.com",
    messagingSenderId: "754810605528"
  })





/*
* A simple "hello world" function
* @param {string} email 
* @param {string} pass 
* @param {string} type 
*/
module.exports = async (email = '', password,type) => {

  if (type === "register"){
    return firebase.auth().createUserWithEmailAndPassword(email, password).then( function(res){
      const uIdResponse = { userId: firebase.auth().currentUser.uid }
      firebase.database().ref('users/' + uIdResponse.userId).set({
        email: email
      });
      return (uIdResponse);
      return 'You are now registered';
    }).catch(function(error) {
      var errorCode = error.code
      var errorMessage = error.message

    return {
      code: errorCode,
      msg: errorMessage
    };
     })
  }
  if (type === "login"){
    return firebase.auth().signInWithEmailAndPassword(email, password).then( function(res){}).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
       return {
         code: errorCode,
         msg: errorMessage
    };
       // ...
    })
  }

  // return `Hello ${response.email} ${response.password} ${response.status}, I built this API with Code on Standard Library!`;
};