'use strict';

var utils = require('../utils/writer.js');
var Chargebacks = require('../service/ChargebacksService');

module.exports.getChargebacks = function getChargebacks(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var network_reference_id = req.swagger.params['network_reference_id'].value;
    var transaction_token = req.swagger.params['transaction_token'].value;
    var amount = req.swagger.params['amount'].value;
    var states = req.swagger.params['states'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var network_case_id = req.swagger.params['network_case_id'].value;
    Chargebacks.getChargebacks(count, start_index, network_reference_id, transaction_token, amount, states, sort_by, network_case_id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getChargebacksChargebacktokenTransitions = function getChargebacksChargebacktokenTransitions(req, res, next) {
    var chargeback_token = req.swagger.params['chargeback_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Chargebacks.getChargebacksChargebacktokenTransitions(chargeback_token, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getChargebacksToken = function getChargebacksToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    Chargebacks.getChargebacksToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getChargebacksTransitionsToken = function getChargebacksTransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    Chargebacks.getChargebacksTransitionsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postChargebackAllocationAcknowledgment = function postChargebackAllocationAcknowledgment(req, res, next) {
    var body = req.swagger.params['body'].value;
    Chargebacks.postChargebackAllocationAcknowledgment(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postChargebacks = function postChargebacks(req, res, next) {
    var body = req.swagger.params['body'].value;
    Chargebacks.postChargebacks(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postChargebacksTransitions = function postChargebacksTransitions(req, res, next) {
    var body = req.swagger.params['body'].value;
    Chargebacks.postChargebacksTransitions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putChargebacksToken = function putChargebacksToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Chargebacks.putChargebacksToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putChargebacksTokenGrantprovisionalcredit = function putChargebacksTokenGrantprovisionalcredit(req, res, next) {
    var token = req.swagger.params['token'].value;
    Chargebacks.putChargebacksTokenGrantprovisionalcredit(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putChargebacksTokenReverseprovisionalcredit = function putChargebacksTokenReverseprovisionalcredit(req, res, next) {
    var token = req.swagger.params['token'].value;
    Chargebacks.putChargebacksTokenReverseprovisionalcredit(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
