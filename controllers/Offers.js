'use strict';

var utils = require('../utils/writer.js');
var Offers = require('../service/OffersService');

module.exports.getOffers = function getOffers(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Offers.getOffers(count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getOffersToken = function getOffersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    Offers.getOffersToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postOffers = function postOffers(req, res, next) {
    var body = req.swagger.params['body'].value;
    Offers.postOffers(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putOffersToken = function putOffersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Offers.putOffersToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
