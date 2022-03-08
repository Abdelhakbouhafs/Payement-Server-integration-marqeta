'use strict';

var utils = require('../utils/writer.js');
var Merchantgroups = require('../service/MerchantgroupsService');

module.exports.getMerchantGroup = function getMerchantGroup(req, res, next) {
    var token = req.swagger.params['token'].value;
    Merchantgroups.getMerchantGroup(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getMerchantGroups = function getMerchantGroups(req, res, next) {
    var mid = req.swagger.params['mid'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Merchantgroups.getMerchantGroups(mid, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postMerchantGroup = function postMerchantGroup(req, res, next) {
    var body = req.swagger.params['body'].value;
    Merchantgroups.postMerchantGroup(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putMerchantGroupsToken = function putMerchantGroupsToken(req, res, next) {
    var body = req.swagger.params['body'].value;
    var token = req.swagger.params['token'].value;
    Merchantgroups.putMerchantGroupsToken(body, token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
