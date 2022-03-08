'use strict';

var utils = require('../utils/writer.js');
var UserTransitions = require('../service/UserTransitionsService');

module.exports.getUsertransitionsToken = function getUsertransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    UserTransitions.getUsertransitionsToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsertransitionsUserUsertoken = function getUsertransitionsUserUsertoken(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    UserTransitions.getUsertransitionsUserUsertoken(user_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsertransitions = function postUsertransitions(req, res, next) {
    var body = req.swagger.params['body'].value;
    UserTransitions.postUsertransitions(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
