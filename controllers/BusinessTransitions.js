'use strict';

var utils = require('../utils/writer.js');
var BusinessTransitions = require('../service/BusinessTransitionsService');

module.exports.getBusinesstransitionsBusinessBusinesstoken = function getBusinesstransitionsBusinessBusinesstoken(req, res, next) {
    var business_token = req.swagger.params['business_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    BusinessTransitions.getBusinesstransitionsBusinessBusinesstoken(business_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBusinesstransitionsToken = function getBusinesstransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    BusinessTransitions.getBusinesstransitionsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postBusinesstransitions = function postBusinesstransitions(req, res, next) {
    var body = req.swagger.params['body'].value;
    BusinessTransitions.postBusinesstransitions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
