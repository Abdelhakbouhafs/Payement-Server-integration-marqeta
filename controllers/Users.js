'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getUsers = function getUsers(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var search_type = req.swagger.params['search_type'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Users.getUsers(count, start_index, search_type, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsersAuthClientaccesstokenToken = function getUsersAuthClientaccesstokenToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var application_token = req.swagger.params['application_token'].value;
    Users.getUsersAuthClientaccesstokenToken(token, application_token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsersParenttokenChildren = function getUsersParenttokenChildren(req, res, next) {
    var parent_token = req.swagger.params['parent_token'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Users.getUsersParenttokenChildren(parent_token, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsersPhonenumberPhonenumber = function getUsersPhonenumberPhonenumber(req, res, next) {
    var phone_number = req.swagger.params['phone_number'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Users.getUsersPhonenumberPhonenumber(phone_number, count, start_index, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsersToken = function getUsersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    Users.getUsersToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsersTokenNotes = function getUsersTokenNotes(req, res, next) {
    var token = req.swagger.params['token'].value;
    var start_index = req.swagger.params['start_index'].value;
    var count = req.swagger.params['count'].value;
    var created_by = req.swagger.params['created_by'].value;
    var created_by_user_role = req.swagger.params['created_by_user_role'].value;
    var include_private = req.swagger.params['include_private'].value;
    var search_type = req.swagger.params['search_type'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Users.getUsersTokenNotes(token, start_index, count, created_by, created_by_user_role, include_private, search_type, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getUsersTokenSsn = function getUsersTokenSsn(req, res, next) {
    var token = req.swagger.params['token'].value;
    var full_ssn = req.swagger.params['full_ssn'].value;
    Users.getUsersTokenSsn(token, full_ssn)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsers = function postUsers(req, res, next) {
    var body = req.body;
    Users.postUsers(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthChangepassword = function postUsersAuthChangepassword(req, res, next) {
    var body = req.swagger.params['body'].value;
    Users.postUsersAuthChangepassword(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthClientaccesstoken = function postUsersAuthClientaccesstoken(req, res, next) {
    var body = req.swagger.params['body'].value;
    Users.postUsersAuthClientaccesstoken(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthLogin = function postUsersAuthLogin(req, res, next) {
    var body = req.swagger.params['body'].value;
    Users.postUsersAuthLogin(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthLogout = function postUsersAuthLogout(req, res, next) {
    Users.postUsersAuthLogout()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthOnetime = function postUsersAuthOnetime(req, res, next) {
    var body = req.swagger.params['body'].value;
    Users.postUsersAuthOnetime(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthResetpassword = function postUsersAuthResetpassword(req, res, next) {
    var body = req.swagger.params['body'].value;
    Users.postUsersAuthResetpassword(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthResetpasswordToken = function postUsersAuthResetpasswordToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Users.postUsersAuthResetpasswordToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthVerifyemail = function postUsersAuthVerifyemail(req, res, next) {
    Users.postUsersAuthVerifyemail()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersAuthVerifyemailToken = function postUsersAuthVerifyemailToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    Users.postUsersAuthVerifyemailToken(token)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersLookup = function postUsersLookup(req, res, next) {
    var body = req.swagger.params['body'].value;
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var search_type = req.swagger.params['search_type'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    Users.postUsersLookup(body, count, start_index, search_type, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.postUsersTokenNotes = function postUsersTokenNotes(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Users.postUsersTokenNotes(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putUsersToken = function putUsersToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var body = req.swagger.params['body'].value;
    Users.putUsersToken(token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.putUsersTokenNotesNotestoken = function putUsersTokenNotesNotestoken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var notes_token = req.swagger.params['notes_token'].value;
    var body = req.swagger.params['body'].value;
    Users.putUsersTokenNotesNotestoken(token, notes_token, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
