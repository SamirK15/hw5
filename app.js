const express = require('express');
const firebase = require('firebase');



//Setting constants
const app = express()
const port = process.env.port || 3001

//using express paser
app.use(express.json())


firebase.initializeApp({
  apiKey: "AIzaSyDIm5IL6HBfzKfYF3pz4-PPkgGGE5WeEmw",
  authDomain: "hackwestern5-b0d71.firebaseapp.com",
  databaseURL: "https://hackwestern5-b0d71.firebaseio.com",
  projectId: "hackwestern5-b0d71",
  storageBucket: "hackwestern5-b0d71.appspot.com",
  messagingSenderId: "754810605528"
  });

//getting access to the db
var db = firebase.database();




//GET
app.get('/', function (req, res) {
    console.log("Get Request");
    res.send("Get Request");
    db.ref('/TestMessages').set({TestMessage: 'GET Request'});

  });

app.put('/', function (req, res) {
    console.log("HTTP Put Request");
    res.send("HTTP PUT Request");
  });
  
  app.post('/', function (req, res) {
    console.log("HTTP POST Request");
    res.send("HTTP POST Request");  
  });
  
  app.delete('/', function (req, res) {
    console.log("HTTP DELETE Request");
    res.send("HTTP DELETE Request");
  });
  



//Starting Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
