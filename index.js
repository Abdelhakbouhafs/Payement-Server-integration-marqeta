'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

const express = require('express');
const app = express(),
    bodyParser = require("body-parser");

const basicAuth = require('express-basic-auth');


var swaggerTools = require('swagger-tools');

var jsyaml = require('js-yaml');
var compression = require('compression');

var serverPort = 3000;

app.use(bodyParser.json());

app.use(compression());

// swaggerRouter configuration
var options = {
    swaggerUi: path.join(__dirname, '/swagger.json'),
    controllers: path.join(__dirname, './controllers'),
    useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    //Protected Serve the Swagger documents and Swagger UI

    app.use(basicAuth({users: {'admin': 'admin'}, challenge: true,}), middleware.swaggerUi());

});


// Start the server
http.createServer(app).listen(process.env.PORT || 5000, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Documentation ui (swagger) is available on (http://localhost:%d/docs)', serverPort);
    console.log('------ --- ----- EveryThing Is Ok , Have I Nice Day ------ --- -----');
});
