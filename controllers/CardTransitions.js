'use strict';

var utils = require('../utils/writer.js');
var CardTransitions = require('../service/CardTransitionsService');

module.exports.getCardtransitionsCardToken = function getCardtransitionsCardToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    CardTransitions.getCardtransitionsCardToken(token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardtransitionsToken = function getCardtransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    CardTransitions.getCardtransitionsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postCardtransitions = function postCardtransitions(req, res, next) {
    var body = req.swagger.params['body'].value;
    CardTransitions.postCardtransitions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
