const express = require('express');
const routes = express.Router();
const postMan = require('../controller/postman.js')

routes.post('/post', postMan);

module.exports = routes;