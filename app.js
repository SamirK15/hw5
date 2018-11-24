const express = require('express');
const firebase = require('firebase');



//Setting constants
const app = express()
const port = process.env.port || 3001

//using express paser
app.use(express.json())

app.use(function (request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
  next();
});


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
    res.send({get: "Get Request"})
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
