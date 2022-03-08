'use strict';

var utils = require('../utils/writer.js');
var DirectDeposits = require('../service/DirectDepositsService');

module.exports.getDirectdeposits = function getDirectdeposits(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var reversed_after_grace_period = req.swagger.params['reversed_after_grace_period'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var direct_deposit_state = req.swagger.params['direct_deposit_state'].value;
    var start_settlement_date = req.swagger.params['start_settlement_date'].value;
    var end_settlement_date = req.swagger.params['end_settlement_date'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    DirectDeposits.getDirectdeposits(count, start_index, reversed_after_grace_period, user_token, business_token, direct_deposit_state, start_settlement_date, end_settlement_date, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDirectdepositsAccountsUserorbusinesstoken = function getDirectdepositsAccountsUserorbusinesstoken(req, res, next) {
    var user_or_business_token = req.swagger.params['user_or_business_token'].value;
    DirectDeposits.getDirectdepositsAccountsUserorbusinesstoken(user_or_business_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDirectdepositsToken = function getDirectdepositsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    DirectDeposits.getDirectdepositsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDirectdepositsTransitions = function getDirectdepositsTransitions(req, res, next) {
    var count = req.swagger.params['count'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var direct_deposit_token = req.swagger.params['direct_deposit_token'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var states = req.swagger.params['states'].value;
    DirectDeposits.getDirectdepositsTransitions(count, user_token, business_token, direct_deposit_token, start_index, sort_by, states)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDirectdepositsTransitionsToken = function getDirectdepositsTransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    DirectDeposits.getDirectdepositsTransitionsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postDirectdepositsTransitions = function postDirectdepositsTransitions(req, res, next) {
    var body = req.swagger.params['body'].value;
    DirectDeposits.postDirectdepositsTransitions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putDirectdepositsAccountsUserorbusinesstoken = function putDirectdepositsAccountsUserorbusinesstoken(req, res, next) {
    var user_or_business_token = req.swagger.params['user_or_business_token'].value;
    var body = req.swagger.params['body'].value;
    DirectDeposits.putDirectdepositsAccountsUserorbusinesstoken(user_or_business_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
