'use strict';

const express = require('express');


const server = express();
const pageNotFoundHandler = require('./routeErrorHandlers/404.js');
const errorHandler = require('./routeErrorHandlers/500.js');
const stamper = require('./middleware/stamper.js');

server.get('/hello', stamper, (req, res) => res.send(`hello ${req.timestamp}`));

server.get('/goodbye', (req, res) => res.send('goodbye'));

server.get('/boo', (req, res, next) =>
next({message: 'this route is trash'})
);

server.use('*', pageNotFoundHandler);
server.use(errorHandler);

module.exports = server;