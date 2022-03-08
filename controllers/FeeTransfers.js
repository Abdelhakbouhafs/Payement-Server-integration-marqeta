'use strict';

var utils = require('../utils/writer.js');
var FeeTransfers = require('../service/FeeTransfersService');

module.exports.getFeetransfersToken = function getFeetransfersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    FeeTransfers.getFeetransfersToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFeetransfers = function postFeetransfers(req, res, next) {
    var body = req.swagger.params['body'].value;
    FeeTransfers.postFeetransfers(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
