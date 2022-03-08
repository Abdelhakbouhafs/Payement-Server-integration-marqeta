'use strict';

var utils = require('../utils/writer.js');
var MsaOrders = require('../service/MsaOrdersService');

module.exports.getMsaordersToken = function getMsaordersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    MsaOrders.getMsaordersToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getMsaordersUnloads = function getMsaordersUnloads(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var original_order_token = req.swagger.params['original_order_token'].value;
    MsaOrders.getMsaordersUnloads(count, start_index, sort_by, user_token, business_token, original_order_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getMsaordersUnloadsUnloadtoken = function getMsaordersUnloadsUnloadtoken(req, res, next) {
    var unload_token = req.swagger.params['unload_token'].value;
    MsaOrders.getMsaordersUnloadsUnloadtoken(unload_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postMsaorders = function postMsaorders(req, res, next) {
    var body = req.swagger.params['body'].value;
    MsaOrders.postMsaorders(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postMsaordersUnloads = function postMsaordersUnloads(req, res, next) {
    var body = req.swagger.params['body'].value;
    MsaOrders.postMsaordersUnloads(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putMsaordersToken = function putMsaordersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    MsaOrders.putMsaordersToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
