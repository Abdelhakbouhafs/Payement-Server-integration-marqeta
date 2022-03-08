'use strict';

var utils = require('../utils/writer.js');
var Cards = require('../service/CardsService');

module.exports.getCards = function getCards(req, res, next) {
    var last_four = req.swagger.params['last_four'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Cards.getCards(last_four, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsBarcodeBarcode = function getCardsBarcodeBarcode(req, res, next) {
    var barcode = req.swagger.params['barcode'].value;
    var fields = req.swagger.params['fields'].value;
    Cards.getCardsBarcodeBarcode(barcode, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsCardHashShowpan = function getCardsCardHashShowpan(req, res, next) {
    var card_hash = req.swagger.params['card_hash'].value;
    var fields = req.swagger.params['fields'].value;
    var show_cvv_number = req.swagger.params['show_cvv_number'].value;
    Cards.getCardsCardHashShowpan(card_hash, fields, show_cvv_number)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsMerchantMerchanttoken = function getCardsMerchantMerchanttoken(req, res, next) {
    var merchant_token = req.swagger.params['merchant_token'].value;
    var fields = req.swagger.params['fields'].value;
    Cards.getCardsMerchantMerchanttoken(merchant_token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsMerchantMerchanttokenShowpan = function getCardsMerchantMerchanttokenShowpan(req, res, next) {
    var merchant_token = req.swagger.params['merchant_token'].value;
    var fields = req.swagger.params['fields'].value;
    var show_cvv_number = req.swagger.params['show_cvv_number'].value;
    Cards.getCardsMerchantMerchanttokenShowpan(merchant_token, fields, show_cvv_number)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsToken = function getCardsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    var expand = req.swagger.params['expand'].value;
    Cards.getCardsToken(token, fields, expand)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsTokenShowpan = function getCardsTokenShowpan(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    var show_cvv_number = req.swagger.params['show_cvv_number'].value;
    Cards.getCardsTokenShowpan(token, fields, show_cvv_number)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getCardsUserToken = function getCardsUserToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Cards.getCardsUserToken(token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postCards = function postCards(req, res, next) {
    var body = req.swagger.params['body'].value;
    var show_cvv_number = req.swagger.params['show_cvv_number'].value;
    var show_pan = req.swagger.params['show_pan'].value;
    Cards.postCards(body, show_cvv_number, show_pan)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postCardsGetbypan = function postCardsGetbypan(req, res, next) {
    var body = req.swagger.params['body'].value;
    Cards.postCardsGetbypan(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postCardsMerchantMerchanttoken = function postCardsMerchantMerchanttoken(req, res, next) {
    var merchant_token = req.swagger.params['merchant_token'].value;
    var body = req.swagger.params['body'].value;
    Cards.postCardsMerchantMerchanttoken(merchant_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putCardsToken = function putCardsToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Cards.putCardsToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
