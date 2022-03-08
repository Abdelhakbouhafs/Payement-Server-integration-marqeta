'use strict';

var utils = require('../utils/writer.js');
var CommandoModes = require('../service/CommandoModesService');

module.exports.getCommandomodes = function getCommandomodes(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    CommandoModes.getCommandomodes(count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCommandomodesCommandomodetokenTransitions = function getCommandomodesCommandomodetokenTransitions(req, res, next) {
    var commandomode_token = req.swagger.params['commandomode_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    CommandoModes.getCommandomodesCommandomodetokenTransitions(commandomode_token, count, start_index, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCommandomodesToken = function getCommandomodesToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    CommandoModes.getCommandomodesToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCommandomodesTransitionsToken = function getCommandomodesTransitionsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    CommandoModes.getCommandomodesTransitionsToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
