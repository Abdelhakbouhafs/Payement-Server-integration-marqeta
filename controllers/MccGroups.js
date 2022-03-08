'use strict';

var utils = require('../utils/writer.js');
var MccGroups = require('../service/MccGroupsService');

module.exports.getMccgroups = function getMccgroups(req, res, next) {
    var mcc = req.swagger.params['mcc'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    MccGroups.getMccgroups(mcc, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getMccgroupsToken = function getMccgroupsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    MccGroups.getMccgroupsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postMccgroups = function postMccgroups(req, res, next) {
    var body = req.swagger.params['body'].value;
    MccGroups.postMccgroups(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putMccgroupsToken = function putMccgroupsToken(req, res, next) {
    var body = req.swagger.params['body'].value;
    var token = req.swagger.params['token'].value;
    MccGroups.putMccgroupsToken(body, token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
