'use strict';

var utils = require('../utils/writer.js');
var Pins = require('../service/PinsService');

module.exports.postPinsControltoken = function postPinsControltoken(req, res, next) {
    var body = req.swagger.params['body'].value;
    Pins.postPinsControltoken(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putPins = function putPins(req, res, next) {
    var body = req.swagger.params['body'].value;
    Pins.putPins(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.revealPins = function revealPins(req, res, next) {
    var body = req.swagger.params['body'].value;
    Pins.revealPins(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
