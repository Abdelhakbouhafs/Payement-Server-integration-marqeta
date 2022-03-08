'use strict';

var utils = require('../utils/writer.js');
var GPAFundTransfers = require('../service/GPAFundTransfersService');

module.exports.getGpaTokenFromBankAccountNumber = function getGpaTokenFromBankAccountNumber(req, res, next) {
    var ddaAcctNum = req.swagger.params['ddaAcctNum'].value;
    GPAFundTransfers.getGpaTokenFromBankAccountNumber(ddaAcctNum)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
