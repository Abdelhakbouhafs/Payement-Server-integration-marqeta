'use strict';

var utils = require('../utils/writer.js');
var DigitalWalletProvisionRequests = require('../service/DigitalWalletProvisionRequestsService');

module.exports.postDigitalwalletprovisionrequestsAndroidpay = function postDigitalwalletprovisionrequestsAndroidpay(req, res, next) {
    var body = req.swagger.params['body'].value;
    DigitalWalletProvisionRequests.postDigitalwalletprovisionrequestsAndroidpay(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postDigitalwalletprovisionrequestsApplepay = function postDigitalwalletprovisionrequestsApplepay(req, res, next) {
    var body = req.swagger.params['body'].value;
    DigitalWalletProvisionRequests.postDigitalwalletprovisionrequestsApplepay(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postDigitalwalletprovisionrequestsSamsungpay = function postDigitalwalletprovisionrequestsSamsungpay(req, res, next) {
    var body = req.swagger.params['body'].value;
    DigitalWalletProvisionRequests.postDigitalwalletprovisionrequestsSamsungpay(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postDigitalwalletprovisionrequestsXPay = function postDigitalwalletprovisionrequestsXPay(req, res, next) {
    var body = req.swagger.params['body'].value;
    DigitalWalletProvisionRequests.postDigitalwalletprovisionrequestsXPay(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
