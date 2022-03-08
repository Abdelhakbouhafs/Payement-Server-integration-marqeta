'use strict';

var utils = require('../utils/writer.js');
var AcceptedCountries = require('../service/AcceptedCountriesService');

module.exports.getAcceptedcountries = function getAcceptedcountries(req, res, next) {
    var count = req.swagger.params['count'].value;
    var start_index = req.swagger.params['start_index'].value;
    var name = req.swagger.params['name'].value;
    var whitelist = req.swagger.params['whitelist'].value;
    var search_type = req.swagger.params['search_type'].value;
    var fields = req.swagger.params['fields'].value;
    var sort_by = req.swagger.params['sort_by'].value;
    AcceptedCountries.getAcceptedcountries(count, start_index, name, whitelist, search_type, fields, sort_by)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAcceptedcountriesToken = function getAcceptedcountriesToken(req, res, next) {
    var token = req.swagger.params['token'].value;
    var fields = req.swagger.params['fields'].value;
    AcceptedCountries.getAcceptedcountriesToken(token, fields)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
