'use strict';

var utils = require('../utils/writer.js');
var VelocityControls = require('../service/VelocityControlsService');

module.exports.getVelocitycontrols = function getVelocitycontrols(req, res, next) {
    var card_product = req.swagger.params['card_product'].value;
    var user = req.swagger.params['user'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    VelocityControls.getVelocitycontrols(card_product, user, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getVelocitycontrolsToken = function getVelocitycontrolsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    VelocityControls.getVelocitycontrolsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getVelocitycontrolsUserUsertokenAvailable = function getVelocitycontrolsUserUsertokenAvailable(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var force_dto = req.swagger.params['force_dto'].value;
    VelocityControls.getVelocitycontrolsUserUsertokenAvailable(user_token, count, start_index, fields, sort_by, force_dto)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postVelocitycontrols = function postVelocitycontrols(req, res, next) {
    var body = req.swagger.params['body'].value;
    VelocityControls.postVelocitycontrols(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putVelocitycontrolsToken = function putVelocitycontrolsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    VelocityControls.putVelocitycontrolsToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
