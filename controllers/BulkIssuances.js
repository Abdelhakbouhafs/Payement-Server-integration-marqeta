'use strict';

var utils = require('../utils/writer.js');
var BulkIssuances = require('../service/BulkIssuancesService');

module.exports.getBulkissuances = function getBulkissuances(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    BulkIssuances.getBulkissuances(count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBulkissuancesToken = function getBulkissuancesToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    BulkIssuances.getBulkissuancesToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postBulkissuances = function postBulkissuances(req, res, next) {
    var body = req.swagger.params['body'].value;
    BulkIssuances.postBulkissuances(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
