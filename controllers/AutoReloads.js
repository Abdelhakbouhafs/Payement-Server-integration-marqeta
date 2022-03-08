'use strict';

var utils = require('../utils/writer.js');
var AutoReloads = require('../service/AutoReloadsService');

module.exports.getAutoreloads = function getAutoreloads(req, res, next) {
    var card_product = req.swagger.params['card_product'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    AutoReloads.getAutoreloads(card_product, user_token, business_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAutoreloadsToken = function getAutoreloadsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    AutoReloads.getAutoreloadsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postAutoreloads = function postAutoreloads(req, res, next) {
    var body = req.swagger.params['body'].value;
    AutoReloads.postAutoreloads(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putAutoreloadsToken = function putAutoreloadsToken(req, res, next) {
    var body = req.swagger.params['body'].value;
    var token = req.swagger.params['token'].value;
    AutoReloads.putAutoreloadsToken(body, token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
