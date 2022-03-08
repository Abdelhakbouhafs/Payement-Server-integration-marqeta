'use strict';

var utils = require('../utils/writer.js');
var RealTimeFeeGroups = require('../service/RealTimeFeeGroupsService');

module.exports.getRealtimefeegroups = function getRealtimefeegroups(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    RealTimeFeeGroups.getRealtimefeegroups(count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getRealtimefeegroupsToken = function getRealtimefeegroupsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    RealTimeFeeGroups.getRealtimefeegroupsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postRealtimefeegroups = function postRealtimefeegroups(req, res, next) {
    var body = req.swagger.params['body'].value;
    RealTimeFeeGroups.postRealtimefeegroups(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putRealtimefeegroupsToken = function putRealtimefeegroupsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    RealTimeFeeGroups.putRealtimefeegroupsToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
