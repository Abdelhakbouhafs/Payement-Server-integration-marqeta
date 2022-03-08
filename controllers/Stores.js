'use strict';

var utils = require('../utils/writer.js');
var Stores = require('../service/StoresService');

module.exports.getStores = function getStores(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Stores.getStores(count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getStoresMidMid = function getStoresMidMid(req, res, next) {
    var mid = req.swagger.params['mid'].value;
    var fields = req.swagger.params['fields'].value;
    Stores.getStoresMidMid(mid, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getStoresToken = function getStoresToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    Stores.getStoresToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postStores = function postStores(req, res, next) {
    var body = req.swagger.params['body'].value;
    Stores.postStores(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putStoresToken = function putStoresToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Stores.putStoresToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
