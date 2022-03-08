'use strict';

var utils = require('../utils/writer.js');
var Webhooks = require('../service/WebhooksService');

module.exports.getWebhooks = function getWebhooks(req, res, next) {
    var active = req.swagger.params['active'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Webhooks.getWebhooks(active, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getWebhooksToken = function getWebhooksToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    Webhooks.getWebhooksToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postWebhooks = function postWebhooks(req, res, next) {
    var body = req.swagger.params['body'].value;
    Webhooks.postWebhooks(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postWebhooksTokenEventtypeEventtoken = function postWebhooksTokenEventtypeEventtoken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var event_type = req.swagger.params['event_type'].value;
    var event_token = req.swagger.params['event_token'].value;
    Webhooks.postWebhooksTokenEventtypeEventtoken(token, event_type, event_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postWebhooksTokenPing = function postWebhooksTokenPing(req, res, next) {
    var token = req.swagger.params['token'].value;
    Webhooks.postWebhooksTokenPing(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putWebhooksCustomHeadersToken = function putWebhooksCustomHeadersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Webhooks.putWebhooksCustomHeadersToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putWebhooksToken = function putWebhooksToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Webhooks.putWebhooksToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
