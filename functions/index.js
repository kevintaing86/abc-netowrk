const express = require('express');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');

let app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// routes
app.post('/', (req, res) => {
  var portNum = req.body.port;
  var peers = {}
  if (portNum == 5050) {
     peers = {
       '1': {
         'ip': 'localhost',
         'port': 5051
       },
       '2': {
         'ip': 'localhost',
         'port': 5052
       }
     }
   };
  if (portNum == 5051) {
    peers = {
      '1': {
        'ip': 'localhost',
        'port': 5050
      },
      '2': {
        'ip': 'localhost',
        'port': 5052
      }
    }
  };
  if (portNum == 5052) {
    peers = {
      '1': {
        'ip': 'localhost',
        'port': 5051
      },
      '2': {
        'ip': 'localhost',
        'port': 5050
      }
    }
  }
  res.status(200).send(peers);
});

exports.getpeers = functions.https.onRequest(app);
