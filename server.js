require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./backend/_helpers/jwt');
const errorHandler = require('./backend/_helpers/error-handler');
const path = require('path');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());

// global error handler

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/envisiun')));

//Facebook Authentication
app.use('/auth/fb', require('./backend/controller/fb.controller'));

//Google Authentication
app.use('/auth/google', require('./backend/controller/google.controller'));

// api routes
app.use('/api/users', require('./backend/controller/users.controller'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/envisiun/index.html'));
});


app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const host = '192.168.0.27';
const server = app.listen(port, host, function () {
    console.log('Server listening on port ' + port);
});
