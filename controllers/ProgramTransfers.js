'use strict';

var utils = require('../utils/writer.js');
var ProgramTransfers = require('../service/ProgramTransfersService');

module.exports.getProgramtransfers = function getProgramtransfers(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    var user_token = req.swagger.params['user_token'].value;
    var business_token = req.swagger.params['business_token'].value;
    var type_token = req.swagger.params['type_token'].value;
    ProgramTransfers.getProgramtransfers(count, start_index, fields, sort_by, user_token, business_token, type_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProgramtransfersToken = function getProgramtransfersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    ProgramTransfers.getProgramtransfersToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProgramtransfersTypes = function getProgramtransfersTypes(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    ProgramTransfers.getProgramtransfersTypes(count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProgramtransfersTypesTypetoken = function getProgramtransfersTypesTypetoken(req, res, next) {
    var type_token = req.swagger.params['type_token'].value;
    ProgramTransfers.getProgramtransfersTypesTypetoken(type_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postProgramtransfers = function postProgramtransfers(req, res, next) {
    var body = req.swagger.params['body'].value;
    ProgramTransfers.postProgramtransfers(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postProgramtransfersTypes = function postProgramtransfersTypes(req, res, next) {
    var body = req.swagger.params['body'].value;
    ProgramTransfers.postProgramtransfersTypes(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putProgramtransfersTypesTypetoken = function putProgramtransfersTypesTypetoken(req, res, next) {
    var type_token = req.swagger.params['type_token'].value;
    var body = req.swagger.params['body'].value;
    ProgramTransfers.putProgramtransfersTypesTypetoken(type_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
