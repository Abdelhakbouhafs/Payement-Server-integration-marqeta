'use strict';

var utils = require('../utils/writer.js');
var PeerTransfers = require('../service/PeerTransfersService');

module.exports.getPeertransfersToken = function getPeertransfersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    PeerTransfers.getPeertransfersToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPeertransfersUserUserorbusinesstoken = function getPeertransfersUserUserorbusinesstoken(req, res, next) {
    var user_or_business_token = req.swagger.params['user_or_business_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    PeerTransfers.getPeertransfersUserUserorbusinesstoken(user_or_business_token, count, start_index, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPeertransfersUserUserorbusinesstokenRecipient = function getPeertransfersUserUserorbusinesstokenRecipient(req, res, next) {
    var user_or_business_token = req.swagger.params['user_or_business_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    PeerTransfers.getPeertransfersUserUserorbusinesstokenRecipient(user_or_business_token, count, start_index, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPeertransfersUserUserorbusinesstokenSender = function getPeertransfersUserUserorbusinesstokenSender(req, res, next) {
    var user_or_business_token = req.swagger.params['user_or_business_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    PeerTransfers.getPeertransfersUserUserorbusinesstokenSender(user_or_business_token, count, start_index, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postPeertransfers = function postPeertransfers(req, res, next) {
    var body = req.swagger.params['body'].value;
    PeerTransfers.postPeertransfers(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
