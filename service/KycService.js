'use strict';
const axios = require('axios');
const Config = require('../utils/config');
const Base_url = Config.base_url;
const authenticator = Config.authenticator;



/**
 * Lists all KYC results for a business
 *
 *
 * business_token String Business token
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns KYCListResponse
 **/
exports.getKycBusinessBusinesstoken = function (business_token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/kyc/business/' + business_token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Returns a specific KYC result
 *
 *
 * token String KYC token
 * returns kyc_response
 **/
exports.getKycToken = function (token) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/kyc/' + token,
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
 * Lists all KYC results for a user
 *
 *
 * user_token String User token
 * count Integer Number of items to retrieve (optional)
 * start_index Integer Start index (optional)
 * fields String Comma-delimited list of fields to return (e.g. field_1,field_2,..). Leave blank to return all fields. (optional)
 * sort_by String Sort order (optional)
 * returns KYCListResponse
 **/
exports.getKycUserUsertoken = function (user_token, count, start_index, fields, sort_by) {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'get',
            url: Base_url + 'v3/kyc/user/' + user_token + '?count=' + count + '&start_index=' + start_index + '&sort_by=-createdTime',
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
 * Performs a KYC
 *
 *
 * body Kyc_request  (optional)
 * returns kyc_response
 **/
exports.postKyc = function (body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "user_token": body.user_token,
            "manual_override": body.manual_override
        });

        var config = {
            method: 'post',
            url: Base_url + 'v3/kyc?api_key=%2Facceptedcountries',
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
 * Accepts KYC answers for questions from initial request
 *
 *
 * token String KYC token
 * body KYCSubmitAnswersRequestModel  (optional)
 * returns kyc_response
 **/
exports.putKycToken = function (token, body) {
    return new Promise(function (resolve, reject) {
        var data = JSON.stringify({
            "answers": body.answers
        });

        var config = {
            method: 'put',
            url: Base_url + 'v3/kyc/' + token,
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

