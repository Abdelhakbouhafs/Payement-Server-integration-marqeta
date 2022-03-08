'use strict';

var utils = require('../utils/writer.js');
var Simulate = require('../service/SimulateService');

module.exports.postSimulateAuthorization = function postSimulateAuthorization(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateAuthorization(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateAuthorizationAdvice = function postSimulateAuthorizationAdvice(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateAuthorizationAdvice(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateClearing = function postSimulateClearing(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateClearing(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateDirectdeposits = function postSimulateDirectdeposits(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateDirectdeposits(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateFinancial = function postSimulateFinancial(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateFinancial(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateFinancialAdvice = function postSimulateFinancialAdvice(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateFinancialAdvice(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateFinancialBalanceinquiry = function postSimulateFinancialBalanceinquiry(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateFinancialBalanceinquiry(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateFinancialOriginalcredit = function postSimulateFinancialOriginalcredit(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateFinancialOriginalcredit(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateFinancialWithdrawal = function postSimulateFinancialWithdrawal(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateFinancialWithdrawal(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postSimulateReversal = function postSimulateReversal(req, res, next) {
    var body = req.swagger.params['body'].value;
    Simulate.postSimulateReversal(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
