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
  if (portNum == 50) {
     peers = {
       '1': {
         'ip': 'localhost',
         'port': 51
       },
       '2': {
         'ip': 'localhost',
         'port': 52
       }
     }
   };
  if (portNum == 51) {
    peers = {
      '1': {
        'ip': 'localhost',
        'port': 50
      },
      '2': {
        'ip': 'localhost',
        'port': 52
      }
    }
  };
  if (portNum == 52) {
    peers = {
      '1': {
        'ip': 'localhost',
        'port': 51
      },
      '2': {
        'ip': 'localhost',
        'port': 50
      }
    }
  }
  res.status(200).send(peers);
});

exports.getpeers = functions.https.onRequest(app);
