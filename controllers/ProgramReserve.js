'use strict';

var utils = require('../utils/writer.js');
var ProgramReserve = require('../service/ProgramReserveService');

module.exports.deposit = function deposit(req, res, next) {
    var body = req.swagger.params['body'].value;
    ProgramReserve.deposit(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProgramReserveDeposits = function getProgramReserveDeposits(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    ProgramReserve.getProgramReserveDeposits(count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProgramreserveBalances = function getProgramreserveBalances(req, res, next) {
    ProgramReserve.getProgramreserveBalances()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProgramreserveTransactions = function getProgramreserveTransactions(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var body = req.swagger.params['body'].value;
    ProgramReserve.getProgramreserveTransactions(count, start_index, sort_by, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postProgramreserveTransactions = function postProgramreserveTransactions(req, res, next) {
    var body = req.swagger.params['body'].value;
    ProgramReserve.postProgramreserveTransactions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
