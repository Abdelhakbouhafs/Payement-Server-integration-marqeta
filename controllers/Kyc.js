'use strict';

var utils = require('../utils/writer.js');
var Kyc = require('../service/KycService');

module.exports.getKycBusinessBusinesstoken = function getKycBusinessBusinesstoken(req, res, next) {
    var business_token = req.swagger.params['business_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Kyc.getKycBusinessBusinesstoken(business_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getKycToken = function getKycToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    Kyc.getKycToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getKycUserUsertoken = function getKycUserUsertoken(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Kyc.getKycUserUsertoken(user_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postKyc = function postKyc(req, res, next) {
    var body = req.swagger.params['body'].value;
    Kyc.postKyc(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putKycToken = function putKycToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Kyc.putKycToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
