'use strict';

var utils = require('../utils/writer.js');
var DigitalWalletTokens = require('../service/DigitalWalletTokensService');

module.exports.getDigitalwallettokens = function getDigitalwallettokens(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var start_date = req.swagger.params['start_date'].value;
    var end_date = req.swagger.params['end_date'].value;
    var pan_reference_id = req.swagger.params['pan_reference_id'].value;
    var token_reference_id = req.swagger.params['token_reference_id'].value;
    var correlation_id = req.swagger.params['correlation_id'].value;
    var token_type = req.swagger.params['token_type'].value;
    var token_requestor_name = req.swagger.params['token_requestor_name'].value;
    var state = req.swagger.params['state'].value;
    var embed = req.swagger.params['embed'].value;
    DigitalWalletTokens.getDigitalwallettokens(count, start_index, fields, sort_by, start_date, end_date, pan_reference_id, token_reference_id, correlation_id, token_type, token_requestor_name, state, embed)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDigitalwallettokensCardCardtoken = function getDigitalwallettokensCardCardtoken(req, res, next) {
    var card_token = req.swagger.params['card_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    DigitalWalletTokens.getDigitalwallettokensCardCardtoken(card_token, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDigitalwallettokensToken = function getDigitalwallettokensToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    DigitalWalletTokens.getDigitalwallettokensToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDigitalwallettokensTokenShowtokenpan = function getDigitalwallettokensTokenShowtokenpan(req, res, next) {
    var token = req.swagger.params['token'].value;
    DigitalWalletTokens.getDigitalwallettokensTokenShowtokenpan(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
