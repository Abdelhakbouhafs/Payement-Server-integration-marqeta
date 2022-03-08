'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.getTransactions = function getTransactions(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var start_date = req.swagger.params['start_date'].value;
    var end_date = req.swagger.params['end_date'].value;
    var type = req.swagger.params['type'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var acting_user_token = req.swagger.params['acting_user_token'].value;
    var card_token = req.swagger.params['card_token'].value;
    var merchant_token = req.swagger.params['merchant_token'].value;
    var campaign_token = req.swagger.params['campaign_token'].value;
    var state = req.swagger.params['state'].value;
    var version = req.swagger.params['version'].value;
    var verbose = req.swagger.params['verbose'].value;
    Transactions.getTransactions(count, start_index, fields, sort_by, start_date, end_date, type, user_token, business_token, acting_user_token, card_token, merchant_token, campaign_token, state, version, verbose)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getTransactionsFundingsourceFundingsourcetoken = function getTransactionsFundingsourceFundingsourcetoken(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var start_date = req.swagger.params['start_date'].value;
    var end_date = req.swagger.params['end_date'].value;
    var type = req.swagger.params['type'].value;
    var polarity = req.swagger.params['polarity'].value;
    var version = req.swagger.params['version'].value;
    var verbose = req.swagger.params['verbose'].value;
    Transactions.getTransactionsFundingsourceFundingsourcetoken(funding_source_token, count, start_index, fields, sort_by, start_date, end_date, type, polarity, version, verbose)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getTransactionsToken = function getTransactionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    var version = req.swagger.params['version'].value;
    var verbose = req.swagger.params['verbose'].value;
    Transactions.getTransactionsToken(token, fields, version, verbose)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getTransactionsTokenRelated = function getTransactionsTokenRelated(req, res, next) {
    var token = req.swagger.params['token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var start_date = req.swagger.params['start_date'].value;
    var end_date = req.swagger.params['end_date'].value;
    var type = req.swagger.params['type'].value;
    var state = req.swagger.params['state'].value;
    var version = req.swagger.params['version'].value;
    var verbose = req.swagger.params['verbose'].value;
    Transactions.getTransactionsTokenRelated(token, count, start_index, fields, sort_by, start_date, end_date, type, state, version, verbose)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
