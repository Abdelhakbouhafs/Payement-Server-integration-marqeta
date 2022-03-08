'use strict';

var utils = require('../utils/writer.js');
var DigitalWalletTokenTransitions = require('../service/DigitalWalletTokenTransitionsService');

module.exports.getDigitalwallettokentransitionsDigitalwallettokenToken = function getDigitalwallettokentransitionsDigitalwallettokenToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    DigitalWalletTokenTransitions.getDigitalwallettokentransitionsDigitalwallettokenToken(token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDigitalwallettokentransitionsToken = function getDigitalwallettokentransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    DigitalWalletTokenTransitions.getDigitalwallettokentransitionsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postDigitalwallettokentransitions = function postDigitalwallettokentransitions(req, res, next) {
    var body = req.swagger.params['body'].value;
    DigitalWalletTokenTransitions.postDigitalwallettokentransitions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
