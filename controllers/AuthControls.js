'use strict';

var utils = require('../utils/writer.js');
var AuthControls = require('../service/AuthControlsService');

module.exports.getAuthcontrols = function getAuthcontrols(req, res, next) {
    var card_product = req.swagger.params['card_product'].value;
    var user = req.swagger.params['user'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    AuthControls.getAuthcontrols(card_product, user, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAuthcontrolsExemptmids = function getAuthcontrolsExemptmids(req, res, next) {
    var card_product = req.swagger.params['card_product'].value;
    var user = req.swagger.params['user'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    AuthControls.getAuthcontrolsExemptmids(card_product, user, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAuthcontrolsExemptmidsToken = function getAuthcontrolsExemptmidsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    AuthControls.getAuthcontrolsExemptmidsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAuthcontrolsToken = function getAuthcontrolsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    AuthControls.getAuthcontrolsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postAuthcontrols = function postAuthcontrols(req, res, next) {
    var body = req.swagger.params['body'].value;
    AuthControls.postAuthcontrols(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postAuthcontrolsExemptmids = function postAuthcontrolsExemptmids(req, res, next) {
    var body = req.swagger.params['body'].value;
    AuthControls.postAuthcontrolsExemptmids(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putAuthcontrolsExemptmidsToken = function putAuthcontrolsExemptmidsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    AuthControls.putAuthcontrolsExemptmidsToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putAuthcontrolsToken = function putAuthcontrolsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    AuthControls.putAuthcontrolsToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
