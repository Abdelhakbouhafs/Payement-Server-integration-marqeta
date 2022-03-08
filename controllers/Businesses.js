'use strict';

var utils = require('../utils/writer.js');
var Businesses = require('../service/BusinessesService');

module.exports.getBusinesses = function getBusinesses(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var business_name_dba = req.swagger.params['business_name_dba'].value;
    var business_name_legal = req.swagger.params['business_name_legal'].value;
    var search_type = req.swagger.params['search_type'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Businesses.getBusinesses(count, start_index, business_name_dba, business_name_legal, search_type, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBusinessesParenttokenChildren = function getBusinessesParenttokenChildren(req, res, next) {
    var parent_token = req.swagger.params['parent_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Businesses.getBusinessesParenttokenChildren(parent_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBusinessesToken = function getBusinessesToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    Businesses.getBusinessesToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBusinessesTokenNotes = function getBusinessesTokenNotes(req, res, next) {
    var token = req.swagger.params['token'].value;
    var start_index = req.swagger.params['start_index'].value;
    var count = req.swagger.params['count'].value;
    var created_by = req.swagger.params['created_by'].value;
    var created_by_user_role = req.swagger.params['created_by_user_role'].value;
    var include_private = req.swagger.params['include_private'].value;
    var search_type = req.swagger.params['search_type'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Businesses.getBusinessesTokenNotes(token, start_index, count, created_by, created_by_user_role, include_private, search_type, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBusinessesTokenSsn = function getBusinessesTokenSsn(req, res, next) {
    var token = req.swagger.params['token'].value;
    var full_ssn = req.swagger.params['full_ssn'].value;
    Businesses.getBusinessesTokenSsn(token, full_ssn)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postBusinesses = function postBusinesses(req, res, next) {
    var body = req.swagger.params['body'].value;
    Businesses.postBusinesses(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postBusinessesLookup = function postBusinessesLookup(req, res, next) {
    var body = req.swagger.params['body'].value;
    Businesses.postBusinessesLookup(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postBusinessesTokenNotes = function postBusinessesTokenNotes(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Businesses.postBusinessesTokenNotes(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putBusinessesToken = function putBusinessesToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Businesses.putBusinessesToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putBusinessesTokenNotesNotestoken = function putBusinessesTokenNotesNotestoken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var notes_token = req.swagger.params['notes_token'].value;
    var body = req.swagger.params['body'].value;
    Businesses.putBusinessesTokenNotesNotestoken(token, notes_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
