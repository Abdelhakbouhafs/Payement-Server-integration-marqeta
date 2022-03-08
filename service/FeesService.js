'use strict';

const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;


/**
 * Lists all fees
 *
 *
 * count Integer Number of fees to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns FeeListResponse
 **/
exports.getFees = function (count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fees?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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


/**
 * Returns a specific fee
 *
 *
 * token String Fee token
 * returns fee
 **/
exports.getFeesToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/fees/' + token,
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


/**
 * Creates a fee
 *
 *
 * body Fee_request  (optional)
 * returns fee
 **/
exports.postFees = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "amount": body.amount,
            "tags": body.tag,
            "token": body.token,
            "currency_code": body.currency_code,
            "active": body.active,
            "real_time_assessment": {
                "transaction_type": body.real_time_assessment.transaction_type,
                "international_enabled": body.real_time_assessment.international_enabled,
                "domestic_enabled": body.real_time_assessment.domestic_enabled
            }
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/fees',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
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
 * Updates a specific fee
 *
 *
 * token String Fee token
 * body Fee_update_request  (optional)
 * returns fee
 **/
exports.putFeesToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "name": body.name,
            "amount": body.amount,
            "tags": body.tag,
            "currency_code": body.currency_code,
            "active": body.active,
            "real_time_assessment": {
                "transaction_type": body.real_time_assessment.transaction_type,
                "international_enabled": body.real_time_assessment.international_enabled,
                "domestic_enabled": body.real_time_assessment.domestic_enabled
            }
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/fees/' + token,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authenticator
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

