'use strict';

var utils = require('../utils/writer.js');
var Ping = require('../service/PingService');

module.exports.getPing = function getPing(req, res, next) {
    Ping.getPing()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postPing = function postPing(req, res, next) {
    var body = req.swagger.params['body'].value;
    Ping.postPing(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
