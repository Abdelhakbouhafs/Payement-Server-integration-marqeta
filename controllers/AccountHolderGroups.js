'use strict';

var utils = require('../utils/writer.js');
var AccountHolderGroups = require('../service/AccountHolderGroupsService');

module.exports.getAccountholdergroups = function getAccountholdergroups(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    AccountHolderGroups.getAccountholdergroups(count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAccountholdergroupsToken = function getAccountholdergroupsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    AccountHolderGroups.getAccountholdergroupsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postAccountholdergroups = function postAccountholdergroups(req, res, next) {
    var body = req.swagger.params['body'].value;
    AccountHolderGroups.postAccountholdergroups(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putAccountholdergroupsToken = function putAccountholdergroupsToken(req, res, next) {
    var body = req.swagger.params['body'].value;
    var token = req.swagger.params['token'].value;
    AccountHolderGroups.putAccountholdergroupsToken(body, token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
