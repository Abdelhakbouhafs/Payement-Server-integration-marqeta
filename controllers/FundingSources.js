'use strict';

var utils = require('../utils/writer.js');
var FundingSources = require('../service/FundingSourcesService');

module.exports.getAllACHFundingSources = function getAllACHFundingSources(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    FundingSources.getAllACHFundingSources(count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesAchFundingsourcetoken = function getFundingsourcesAchFundingsourcetoken(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    FundingSources.getFundingsourcesAchFundingsourcetoken(funding_source_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesAchFundingsourcetokenVerificationamounts = function getFundingsourcesAchFundingsourcetokenVerificationamounts(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    FundingSources.getFundingsourcesAchFundingsourcetokenVerificationamounts(funding_source_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesAddressesBusinessBusinesstoken = function getFundingsourcesAddressesBusinessBusinesstoken(req, res, next) {
    var business_token = req.swagger.params['business_token'].value;
    var fields = req.swagger.params['fields'].value;
    FundingSources.getFundingsourcesAddressesBusinessBusinesstoken(business_token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesAddressesFundingsourceaddresstoken = function getFundingsourcesAddressesFundingsourceaddresstoken(req, res, next) {
    var funding_source_address_token = req.swagger.params['funding_source_address_token'].value;
    FundingSources.getFundingsourcesAddressesFundingsourceaddresstoken(funding_source_address_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesAddressesUserUsertoken = function getFundingsourcesAddressesUserUsertoken(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var fields = req.swagger.params['fields'].value;
    FundingSources.getFundingsourcesAddressesUserUsertoken(user_token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesBusinessBusinesstoken = function getFundingsourcesBusinessBusinesstoken(req, res, next) {
    var business_token = req.swagger.params['business_token'].value;
    var type = req.swagger.params['type'].value;
    var fields = req.swagger.params['fields'].value;
    FundingSources.getFundingsourcesBusinessBusinesstoken(business_token, type, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesPaymentcardFundingsourcetoken = function getFundingsourcesPaymentcardFundingsourcetoken(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    FundingSources.getFundingsourcesPaymentcardFundingsourcetoken(funding_source_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesProgramToken = function getFundingsourcesProgramToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    FundingSources.getFundingsourcesProgramToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesProgramgatewayToken = function getFundingsourcesProgramgatewayToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    FundingSources.getFundingsourcesProgramgatewayToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getFundingsourcesUserUsertoken = function getFundingsourcesUserUsertoken(req, res, next) {
    var user_token = req.swagger.params['user_token'].value;
    var type = req.swagger.params['type'].value;
    var fields = req.swagger.params['fields'].value;
    FundingSources.getFundingsourcesUserUsertoken(user_token, type, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesAch = function postFundingsourcesAch(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesAch(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesAchPartner = function postFundingsourcesAchPartner(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesAchPartner(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesAddresses = function postFundingsourcesAddresses(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesAddresses(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesPaymentcard = function postFundingsourcesPaymentcard(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesPaymentcard(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesProgram = function postFundingsourcesProgram(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesProgram(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesProgramAch = function postFundingsourcesProgramAch(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesProgramAch(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postFundingsourcesProgramgateway = function postFundingsourcesProgramgateway(req, res, next) {
    var body = req.swagger.params['body'].value;
    FundingSources.postFundingsourcesProgramgateway(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesAchFundingsourcetoken = function putFundingsourcesAchFundingsourcetoken(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    var body = req.swagger.params['body'].value;
    FundingSources.putFundingsourcesAchFundingsourcetoken(funding_source_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesAddressesFundingsourceaddresstoken = function putFundingsourcesAddressesFundingsourceaddresstoken(req, res, next) {
    var funding_source_address_token = req.swagger.params['funding_source_address_token'].value;
    var body = req.swagger.params['body'].value;
    FundingSources.putFundingsourcesAddressesFundingsourceaddresstoken(funding_source_address_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesFundingsourcetoken = function putFundingsourcesFundingsourcetoken(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    var body = req.swagger.params['body'].value;
    FundingSources.putFundingsourcesFundingsourcetoken(funding_source_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesFundingsourcetokenDefault = function putFundingsourcesFundingsourcetokenDefault(req, res, next) {
    var funding_source_token = req.swagger.params['funding_source_token'].value;
    FundingSources.putFundingsourcesFundingsourcetokenDefault(funding_source_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesProgramToken = function putFundingsourcesProgramToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    FundingSources.putFundingsourcesProgramToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesProgramgatewayCustomHeaderToken = function putFundingsourcesProgramgatewayCustomHeaderToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    FundingSources.putFundingsourcesProgramgatewayCustomHeaderToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putFundingsourcesProgramgatewayToken = function putFundingsourcesProgramgatewayToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    FundingSources.putFundingsourcesProgramgatewayToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
