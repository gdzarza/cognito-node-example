const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const {
    RegisterUser,
    Login,
    update,
    ValidateToken,
    renew,
    DeleteUser,
    deleteAttributes,
    ChangePassword
} = require('./services');

global.fetch = require('node-fetch');

const app = express();

app.get('/', function(req, res) {
    //RegisterUser();
    //Login();
    res.send('hello world');
});

app.listen(4000, () => {
    console.log('Listening for requests on port 4000');
});
