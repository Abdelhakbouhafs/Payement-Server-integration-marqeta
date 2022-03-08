'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;




/**
 * Lists all accepted countries
 *
 *
 * count Integer Number of accepted countries to retrieve (optional)
 * start_index Integer Start index (optional)
 * name String Name (optional)
 * whitelist Boolean Whitelist (optional)
 * search_type String Search type (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns AcceptedCountriesListResponse
 **/
exports.getAcceptedcountries = function (count, start_index, name, whitelist, search_type, fields, sort_by) {
    return new Promise(function (resolve, reject) {

        var data = JSON.stringify({
            "count": count,
            "start_index": start_index
        });

        var config = {
            method: 'get',
            url: Base_url + 'v3/acceptedcountries?count=' + count + '&start_index=' + start_index,
            headers: {
                'Content-type': 'application/json',
                'Authorization': authenticator,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                var examples = {};
                examples['application/json'] = response.data;
                if (Object.keys(examples).length > 0) {
                    resolve(examples[Object.keys(examples)[0]]);
                } else {
                    resolve();
                }
            })
            .catch(function (error) {
                reject(error);
            });


    });
}

/**
 * Returns a specific accepted country
 *
 *
 * token String Accepted country token
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * returns accepted_countries_model
 **/
exports.getAcceptedcountriesToken = function (token, fields) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/acceptedcountries/' + token,
            headers: {
                'Accept': 'application/json',
                'Authorization': authenticator
            }
        };

        axios(config)
            .then(function (response) {
                var examples = {};
                examples['application/json'] = response.data;

                if (Object.keys(examples).length > 0) {

                    resolve(examples[Object.keys(examples)[0]]);
                } else {
                    resolve();
                }
            })
            .catch(function (error) {

                reject(error);
            });
    });
}

