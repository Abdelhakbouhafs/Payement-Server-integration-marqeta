'use strict';

var utils = require('../utils/writer.js');
var OfferOrders = require('../service/OfferOrdersService');

module.exports.getOfferordersToken = function getOfferordersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    OfferOrders.getOfferordersToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postOfferorders = function postOfferorders(req, res, next) {
    var body = req.swagger.params['body'].value;
    OfferOrders.postOfferorders(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
