'use strict';

var utils = require('../utils/writer.js');
var PushToCard = require('../service/PushToCardService');

module.exports.getPushtocardsDisburse = function getPushtocardsDisburse(req, res, next) {
    var count = req.swagger.params['count'].value;
    var fields = req.swagger.params['fields'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    PushToCard.getPushtocardsDisburse(count, fields, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPushtocardsDisburseToken = function getPushtocardsDisburseToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    PushToCard.getPushtocardsDisburseToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPushtocardsPaymentcard = function getPushtocardsPaymentcard(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var count = req.swagger.params['count'].value;
    var fields = req.swagger.params['fields'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    PushToCard.getPushtocardsPaymentcard(user_token, count, fields, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPushtocardsPaymentcardToken = function getPushtocardsPaymentcardToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    PushToCard.getPushtocardsPaymentcardToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postPushtocardsDisburse = function postPushtocardsDisburse(req, res, next) {
    var body = req.swagger.params['body'].value;
    PushToCard.postPushtocardsDisburse(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postPushtocardsPaymentcard = function postPushtocardsPaymentcard(req, res, next) {
    var body = req.swagger.params['body'].value;
    PushToCard.postPushtocardsPaymentcard(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
