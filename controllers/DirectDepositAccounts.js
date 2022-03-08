'use strict';

var utils = require('../utils/writer.js');
var DirectDepositAccounts = require('../service/DirectDepositAccountsService');

module.exports.createAccount = function createAccount(req, res, next) {
    var body = req.swagger.params['body'].value;
    DirectDepositAccounts.createAccount(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.createTransition = function createTransition(req, res, next) {
    var body = req.swagger.params['body'].value;
    DirectDepositAccounts.createTransition(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCDDInfo = function getCDDInfo(req, res, next) {
    var token = req.swagger.params['token'].value;
    DirectDepositAccounts.getCDDInfo(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDirectDepositAccount = function getDirectDepositAccount(req, res, next) {
    var token = req.swagger.params['token'].value;
    DirectDepositAccounts.getDirectDepositAccount(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getDirectDepositAccountTransition = function getDirectDepositAccountTransition(req, res, next) {
    var token = req.swagger.params['token'].value;
    DirectDepositAccounts.getDirectDepositAccountTransition(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getTransitionList = function getTransitionList(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    DirectDepositAccounts.getTransitionList(user_token, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUserDirectDepositAccounts = function getUserDirectDepositAccounts(req, res, next) {
    var token = req.swagger.params['token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var state = req.swagger.params['state'].value;
    DirectDepositAccounts.getUserDirectDepositAccounts(token, count, start_index, sort_by, state)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUserForDirectDepositAccount = function getUserForDirectDepositAccount(req, res, next) {
    var account_number = req.swagger.params['account_number'].value;
    DirectDepositAccounts.getUserForDirectDepositAccount(account_number)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.update = function update(req, res, next) {
    var body = req.swagger.params['body'].value;
    var token = req.swagger.params['token'].value;
    DirectDepositAccounts.update(body, token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateCDDInfo = function updateCDDInfo(req, res, next) {
    var body = req.swagger.params['body'].value;
    var token = req.swagger.params['token'].value;
    var cddtoken = req.swagger.params['cddtoken'].value;
    DirectDepositAccounts.updateCDDInfo(body, token, cddtoken)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
