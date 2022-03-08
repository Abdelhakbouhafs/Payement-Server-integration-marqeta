'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Returns a GPA order
 *
 *
 * token String
 * returns gpa_response
 **/
exports.getGpaordersToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/gpaorders/' + token,
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
 * Lists all GPA returns
 *
 *
 * count Integer Number of GPA unloads to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * user_token String User token (optional)
 * business_token String Business token (optional)
 * original_order_token String Original order token (optional)
 * returns GPAUnloadListResponse
 **/
exports.getGpaordersUnloads = function (count, start_index, fields, sort_by, user_token, business_token, original_order_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/gpaorders/unloads?count=' + count + '&start_index=' + start_index + '&sort_by=-lastModifiedTime&user_token=' + user_token + '&business_token=' + business_token + '&original_order_token=' + original_order_token,
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
 * Returns a specific GPA return
 *
 *
 * unload_token String Unload token
 * returns gpa_returns
 **/
exports.getGpaordersUnloadsUnloadtoken = function (unload_token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/gpaorders/unloads/' + unload_token,
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
 * Funds a user's GPA account
 *
 *
 * body Gpa_request  (optional)
 * returns gpa_response
 **/
exports.postGpaorders = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "tags": body.tags,
            "memo": body.memo,
            "fees": body.fees,
            "token": body.token,
            "user_token": body.user_token,
            "business_token": body.business_token,
            "amount": body.amount,
            "currency_code": body.currency_code,
            "funding_source_token": body.funding_source_token,
            "funding_source_address_token": body.funding_source_address_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/gpaorders',
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
 * Returns a GPA order
 *
 *
 * body Unload_request_model  (optional)
 * returns gpa_returns
 **/
exports.postGpaordersUnloads = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "token": body.token,
            "original_order_token": body.original_order_token,
            "amount": body.amount,
            "tags": body.tags,
            "memo": body.memo,
            "funding_source_address_token": body.funding_source_address_token
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/gpaorders/unloads',
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

