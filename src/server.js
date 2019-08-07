// import express from 'express';
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const Models = require('../model/models.js');
const port = 4000;
const server = express();
const Html = require('./client/html');

server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../public')));

const serverBundle = require('../public/app-server.js').default;


const React = require('react') ;
const ReactDom = require('react-dom/server');
const Layout = require('./client/html.js');

const renderComponent = (props = {}) => {
  let component = React.createElement(serverBundle, props);
  return ReactDom.renderToString(component);
};


server.get('/items', (req, res) => { 

  Models.psqlRetrieveAll(req, res).then((data) => {
    let component = renderComponent({'data': data});
    res.end(Layout(
      'Server side Rendering with Google Maps',
      component
    ));

    if ( Array.isArray(data) === false ) {
        data = [];
    }

    // const body = ReactDom.renderToString(component);
    // const title = 'Server side Rendering with Google Maps';
    
    // res.send(
    //   Html({
    //     body,
    //     title,
    //   })
    // );
  }).catch( err => console.error(err));
});

server.get('/items/:id', (req, res) => {
  Models.psqlRetrieveOne(req, res);
})

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

/**{
 "name": "theHoodSSR",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
  "start": "nodemon ./src/server.js",
  "build": "webpack",
  "dev": "webpack -d --watch"
 },
 "devDependencies": {
  "babel-core": "^6.10.4",
  "babel-loader": "^7.1.2",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.11.1",
  "webpack": "^3.8.1",
  "webpack-node-externals": "^1.2.0"
 },
 "dependencies": {
  "axios": "^0.18.0",
  "dotenv": "^8.0.0",
  "express": "^4.14.0",
  "google-map-react": "^1.1.4",
  "make-runnable": "^1.3.6",
  "morgan": "^1.9.1",
  "path": "^0.12.7",
  "pg": "^7.10.0",
  "react": "^16.2.0",
  "react-dialog": "^1.0.2",
  "react-dom": "^16.2.0",
  "styled-components": "^2.2.4"
 },
 "keywords": [],
 "author": "",
 "license": "ISC"
}
 */