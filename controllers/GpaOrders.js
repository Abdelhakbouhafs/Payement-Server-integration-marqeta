'use strict';

var utils = require('../utils/writer.js');
var GpaOrders = require('../service/GpaOrdersService');

module.exports.getGpaordersToken = function getGpaordersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    GpaOrders.getGpaordersToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getGpaordersUnloads = function getGpaordersUnloads(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var original_order_token = req.swagger.params['original_order_token'].value;
    GpaOrders.getGpaordersUnloads(count, start_index, fields, sort_by, user_token, business_token, original_order_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getGpaordersUnloadsUnloadtoken = function getGpaordersUnloadsUnloadtoken(req, res, next) {
    var unload_token = req.swagger.params['unload_token'].value;
    GpaOrders.getGpaordersUnloadsUnloadtoken(unload_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postGpaorders = function postGpaorders(req, res, next) {
    var body = req.swagger.params['body'].value;
    GpaOrders.postGpaorders(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postGpaordersUnloads = function postGpaordersUnloads(req, res, next) {
    var body = req.swagger.params['body'].value;
    GpaOrders.postGpaordersUnloads(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
