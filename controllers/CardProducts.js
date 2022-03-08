'use strict';

var utils = require('../utils/writer.js');
var CardProducts = require('../service/CardProductsService');

module.exports.getCardproducts = function getCardproducts(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    CardProducts.getCardproducts(count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardproductsToken = function getCardproductsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    CardProducts.getCardproductsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postCardproducts = function postCardproducts(req, res, next) {
    var body = req.swagger.params['body'].value;
    CardProducts.postCardproducts(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putCardproductsToken = function putCardproductsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    CardProducts.putCardproductsToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
