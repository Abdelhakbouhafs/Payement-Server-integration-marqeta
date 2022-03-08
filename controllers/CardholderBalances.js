'use strict';

var utils = require('../utils/writer.js');
var CardholderBalances = require('../service/CardholderBalancesService');

module.exports.getBalancesToken = function getBalancesToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    CardholderBalances.getBalancesToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBalancesTokenMsas = function getBalancesTokenMsas(req, res, next) {
    var token = req.swagger.params['token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    CardholderBalances.getBalancesTokenMsas(token, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
